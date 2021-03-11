import React from 'react';

import Channel from './Channel';

export default {
    component: Channel,
    title: 'Channels',
    backgroundColor: 'none',
}

const Template = args => <Channel {...args} />;

export const Default = Template.bind({});

Default.args = {
    channel: {
        id: '1',
        title: 'Test Channel',
        backgroundColor: 'hoverColor',
        state: 'CHANNEL_NORMAL',
      },
}

export const ChannelHover = Template.bind({});

ChannelHover.args = {
    channel: {
        state: 'CHANNEL_HOVER',
        title: 'red color',
        backgroundColor: 'normalColor',
      },
};