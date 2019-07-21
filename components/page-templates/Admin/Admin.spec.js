import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AdminComponent from './Admin';

describe('<Admin />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AdminComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
