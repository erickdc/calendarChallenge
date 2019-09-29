import { ReminderEditor } from '../index';
import ValidateModule from '../validate';

jest.mock('../validate');

const mockedDate = new Date(2019, 9, 21);

global.Date = jest.fn(() => mockedDate);

describe('<ReminderEditor />', () => {
  const mockedReminder = jest.fn();
  const props = {
    selectedDay: 1,
    actions: {
      createReminder: mockedReminder,
    },
    handleClose: jest.fn(),
  };
  const expectedError = {
    errors: {
      color: '',
    },
  };

  const reminder = new ReminderEditor(props);

  describe('when creating a reminder with incomplete data', () => {
    it('should not create a reminder', () => {
      ValidateModule.mockImplementation(() => ({ color: '' }));
      reminder.setState = jest.fn();
      const result = reminder.createReminder();
      expect(reminder.setState).toHaveBeenCalledWith(expectedError);
      expect(result).toEqual(false);
    });
  });
  describe('when creating a reminder with complete data', () => {
    it('should create a reminder', () => {
      const expectedResult = {
        city: '',
        color: '',
        currentDateTime: mockedDate,
        id: 1571637600000,
        message: '',
      };
      ValidateModule.mockImplementation(() => ({}));
      reminder.setState = jest.fn();
      reminder.createReminder();
      expect(mockedReminder).toHaveBeenCalledWith(expectedResult);
    });
  });
});
