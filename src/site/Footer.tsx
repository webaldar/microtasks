import React from 'react';

type footerType = {
    titleForFooter: string
}
export const Footer = (props: footerType) => {
    return (
        <div>{props.titleForFooter}</div>
    );
};

