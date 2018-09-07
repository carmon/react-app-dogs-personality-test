import React from 'react';

export const Section = ({ backgroundColor, children, color, subtitle, title, width }) => 
    <div 
        style={{ 
            backgroundColor,
            color,
            display: 'block', 
            height: '100%',
            padding: '20px', 
            width 
        }}
    >
        {title && <h3 style={{ margin: 0 }}>{title}</h3>}
        {subtitle && <h5 style={{ margin: 0 }}>{subtitle}</h5>}
        {children}
    </div>;

export const CenteredContainer = ({ children }) => 
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1% 0' }}>{children}</div>

export const FooterButton = ({ onClick, text }) => 
    <CenteredContainer>
        <button style={{ width: '40%' }} onClick={onClick}>{text}</button>
    </CenteredContainer>;
