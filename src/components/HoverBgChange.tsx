import React from 'react';

interface HoverBgChangeProps {
    children: React.ReactNode;
    overlayColor?: string;
    className?: string;
}

const HoverBgChange: React.FC<HoverBgChangeProps> = ({
                                                         children,
                                                         overlayColor = '#00E1FF30',
                                                         className = 'h-100',
                                                     }) => {
    return (
        <div
            className={`hover-bg-change ${className}`}
            style={{'--overlay-color': overlayColor} as React.CSSProperties}
        >
            {children}
        </div>
    );
};

export default HoverBgChange;
