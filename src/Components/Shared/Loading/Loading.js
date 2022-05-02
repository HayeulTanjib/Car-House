import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='vh-100'>
            <>
                <Button variant="warning" className="fw-bold" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-1"
                    />
                  Please Wait...
                </Button>
            </>
        </div>
    );
};

export default Loading;