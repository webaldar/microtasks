import React from 'react';
type bodyType = {
    titleForBody: string
}
export const Body = ({titleForBody}: bodyType) => {
    return (
        <div>{titleForBody}</div>
    );
};

