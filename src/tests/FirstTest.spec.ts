import { User } from '@models/User';

test('It should be ok', () => {
  const user = new User();

  user.name = 'Bruno';

  expect(user.name).toEqual('Bruno');
});
