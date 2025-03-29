/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #eef5ff;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 24px;
}

footer {
    background-color: #0056b3;
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Video Library */
.video-library {
    text-align: center;
    padding: 20px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.video-item {
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: left;
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    color: #333;
    display: flex;
}

.video-item:hover {
    transform: scale(1.05);
}

.video-item img {
    width: 40%;
    border-radius: 10px;
}

.video-info {
    padding: 10px;
}

/* Video Player */
.video-player-container {
    max-width: 800px;
    margin: 20px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

video {
    width: 100%;
    border-radius: 10px;
}

.video-actions button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
}

.video-actions button:hover {
    background-color: #0056b3;
}

.video-summary {
    margin-top: 20px;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
}

/* Responsive */
@media (max-width: 600px) {
    .video-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

/* ===== Header Styling ===== */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: linear-gradient(135deg, #002A5E, #004EA3);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: 800;
    color: white;
    letter-spacing: 1px;
}

/* ===== Navigation Styling ===== */
nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 25px;
}

nav ul li a {
    color: #E3F2FD;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: 0.3s;
}

nav ul li a:hover {
    color: #90CAF9;
    transform: scale(1.1);
}