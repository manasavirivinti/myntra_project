import React, { useState, useRef } from 'react';

const UploadDisplay = () => {
    const [videos, setVideos] = useState([]);
    const videoInputRef = useRef(null);

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setVideos(prevVideos => [...prevVideos, e.target.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMouseEnter = (index) => {
        const videoElement = document.getElementById(`video-${index}`);
        videoElement.play();
    };

    const handleMouseLeave = (index) => {
        const videoElement = document.getElementById(`video-${index}`);
        videoElement.pause();
    };

    return (
        <div style={{ height: '100vh', width: '100vw', overflowY: 'scroll', marginTop: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input 
                type="file" 
                accept="video/*" 
                onChange={handleVideoChange} 
                ref={videoInputRef}
                style={{ display: 'none' }}
            />
            {videos.map((video, index) => (
                <div
                    key={index}
                    style={{
                        position: 'relative',
                        width: '50%',
                        height: '100%', // Full height of viewport
                        overflow: 'hidden',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <video 
                        id={`video-${index}`}
                        src={video} 
                        style={{ 
                            width: '50%', 
                            height: '100%', 
                            objectFit: 'cover',
                            marginTop:'10px',
                            borderRadius:'30px'
                        }}
                        muted
                        loop
                    />
                </div>
            ))}
            <div style={{ position: 'fixed', bottom: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button
                    onClick={() => videoInputRef.current.click()}
                    style={{
                        padding: '10px 20px',
                        fontSize: '24px',
                        borderRadius: '50%',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                        backgroundColor: 'black',
                        color: 'white',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default UploadDisplay;
