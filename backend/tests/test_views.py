
from .test_setup import TestSetup
import pdb
class TestViews(TestSetup):

    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        # pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        res = self.client.post(self.register_url, self.user_data, format='json')
        # pdb.set_trace()
        self.assertEqual(res.status_code, 201)

    
    def test_user_cannot_login_with_unverified_email(self):
        self.client.post(
            self.register_url,
            self.user_data,
            format='json'
        )
        res = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 401)
    
    