import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NavigationComponent from './index';

describe('<Navigation />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <NavigationComponent>
        {() => <div>Test Component</div>}
      </NavigationComponent>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
