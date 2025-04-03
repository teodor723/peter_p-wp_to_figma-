import React from 'react';

interface HoverTranslateYProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
}

const HoverTranslateY: React.FC<HoverTranslateYProps> = ({
                                                             children,
                                                             offset = 10,
                                                             className = 'h-100',
                                                         }) => {
    return (
        <div
            className={`hover-translate-y ${className}`}
            style={{'--hover-offset': `-${offset}px`} as React.CSSProperties}
        >
            {children}
        </div>
    );
};

export default HoverTranslateY;
