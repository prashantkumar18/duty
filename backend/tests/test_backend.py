"""Backend API tests for Dutyee API."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://duty-tracker-60.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Root ----
class TestRoot:
    def test_api_root(self, api):
        r = api.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json() == {"message": "Dutyee API live"}


# ---- Contact ----
class TestContact:
    def test_create_contact_valid(self, api):
        payload = {
            "name": "TEST_John",
            "email": "test_john@example.com",
            "company": "TEST Co",
            "message": "Hello from test"
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)
        assert "_id" not in data

    def test_create_contact_no_company(self, api):
        payload = {"name": "TEST_Jane", "email": "jane@example.com", "message": "hi"}
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        assert r.json()["email"] == "jane@example.com"

    def test_list_contacts_no_id_leak(self, api):
        r = api.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for d in data:
            assert "_id" not in d
            assert "id" in d
            assert "name" in d
            assert "email" in d

    def test_create_and_verify_persistence(self, api):
        payload = {
            "name": "TEST_Persist",
            "email": "persist@example.com",
            "company": "TEST",
            "message": "persistence check"
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        created_id = r.json()["id"]

        r2 = api.get(f"{BASE_URL}/api/contact")
        assert r2.status_code == 200
        assert any(d["id"] == created_id for d in r2.json())

    def test_invalid_email_rejected(self, api):
        payload = {"name": "TEST", "email": "not-an-email", "message": "hi"}
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code in (400, 422), r.text

    def test_empty_name_rejected(self, api):
        payload = {"name": "", "email": "x@y.com", "message": "hi"}
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code in (400, 422), r.text

    def test_empty_message_rejected(self, api):
        payload = {"name": "TEST", "email": "x@y.com", "message": ""}
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code in (400, 422), r.text

    def test_missing_fields_rejected(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={"name": "x"})
        assert r.status_code in (400, 422)
