import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ReminderEditor from '../index';

const renderer = new ShallowRenderer();

describe('<ReminderEditor />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<ReminderEditor />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
