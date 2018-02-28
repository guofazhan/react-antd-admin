import React from 'react';
import PropTypes from 'prop-types'
import { Layout} from 'antd';
const {Footer} = Layout;
/**
 * 全局底部
 */
class GlobalFooter extends React.Component {
    constructor(...args) {
        super(...args);
        this.links = this.props.links;
        this.copyright=this.props.copyright;
    }
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <div>
                    {
                        this.links && (
                            <div >
                                {this.links.map(link => (
                                    <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        )
                    }
                    {this.copyright && <div>{this.copyright}</div>}
                </div>
            </Footer>
        );
    }
}

/**
 * propTypes类型校验
 * @type {{links: shim, style: shim, copyright: shim}}
 */
GlobalFooter.propTypes = {
    links: PropTypes.array,
    style: PropTypes.string,
    copyright: PropTypes.object
}

export default GlobalFooter

