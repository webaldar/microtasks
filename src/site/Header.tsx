import React from 'react';

type headerType = {
    titleForHeader: string
}
export const Header = (props: headerType) => {
    return (
        <div>{props.titleForHeader}</div>
    );
};

