import { h, Component } from 'preact';

/** @jsx h */

function List(props) {
    let { route, urls, items, field, pageName } = props;
    if (urls) {
        if (typeof(urls) === 'string') {
            if (items) {
                items = [ items ];
            } else {
                items = [ { url: urls, pending: true } ];
            }
        } else if (urls instanceof Array) {
            items = urls.map((url) => {
                var item = (items) ? items[url] : null;
                if (!item) {
                    item = { url, pending: true };
                }
                return item;
            });
        }
    }
    if (!items) {
        return null;
    }
    return (
        <ul>
        {
            items.map((item) => {
                let id = route.extractID(item.url);
                let url = route.find(pageName, { id });
                let text = item.pending ? '...' : item[field];
                let linkProps = {
                    href: url,
                    className: (item.pending) ? 'pending' : undefined,
                };
                return <li><a {...linkProps}>{text}</a></li>;
            })
        }
        </ul>
    );
}

List.defaultProps = {
    field: 'name'
};

export {
    List as default,
    List
};
