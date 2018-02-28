import React from 'react';
import { Icon} from 'antd';
export const links = [{
    key: '帮助',
    title: '帮助',
    href: '',
}, {
    key: 'github',
    title: <Icon type="github" />,
    href: 'https://github.com/ant-design/ant-design-pro',
    blankTarget: true,
}, {
    key: '条款',
    title: '条款',
    href: '',
    blankTarget: true,
}];

export const copyright = <div>Copyright<Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品</div>;


export const query = {
    'width-between-400-and-599': {
        minWidth: 400,
        maxWidth: 599
    },
    'width-larger-than-600': {
        minWidth: 600,
    }
};