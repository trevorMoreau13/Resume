// This is a simplified placeholder to simulate a chatbot widget appearing.
// In a real scenario, this would be the script provided by the chatbot service.
document.addEventListener("DOMContentLoaded", function() {
    const chatbotWidget = document.createElement("div");
    chatbotWidget.id = "resume-chatbot-placeholder";
    chatbotWidget.style.position = "fixed";
    chatbotWidget.style.bottom = "20px";
    chatbotWidget.style.right = "90px"; 
    chatbotWidget.style.width = "60px";
    chatbotWidget.style.height = "60px";
    chatbotWidget.style.backgroundColor = "#3498db"; 
    chatbotWidget.style.borderRadius = "50%";
    chatbotWidget.style.color = "white";
    chatbotWidget.style.display = "flex";
    chatbotWidget.style.alignItems = "center";
    chatbotWidget.style.justifyContent = "center";
    chatbotWidget.style.fontSize = "20px"; // Adjusted font size for text icon
    chatbotWidget.style.fontFamily = "Arial, sans-serif"; // Ensure a common font
    chatbotWidget.style.cursor = "pointer";
    chatbotWidget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    chatbotWidget.style.zIndex = "1001"; 

    const chatbotIframeContainer = document.createElement("div");
    chatbotIframeContainer.id = "resume-chatbot-iframe-container";
    chatbotIframeContainer.style.position = "fixed";
    chatbotIframeContainer.style.bottom = "90px"; 
    chatbotIframeContainer.style.right = "90px"; 
    chatbotIframeContainer.style.width = "350px";
    chatbotIframeContainer.style.height = "500px";
    chatbotIframeContainer.style.border = "1px solid #ccc";
    chatbotIframeContainer.style.borderRadius = "10px";
    chatbotIframeContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    chatbotIframeContainer.style.display = "none"; 
    chatbotIframeContainer.style.zIndex = "1000"; 
    chatbotIframeContainer.style.backgroundColor = "white";
    chatbotIframeContainer.style.padding = "10px"; // Add padding for content
    chatbotIframeContainer.style.boxSizing = "border-box"; // Ensure padding doesn't increase size
    
    const chatIconText = "Chat";
    const closeIconText = "Close"; // Using text for close as well for consistency
    
    chatbotWidget.textContent = chatIconText;
    chatbotIframeContainer.innerHTML = "<p style=\"text-align:center; margin-top: 20px; color: #333;\">Chatbot is loading...</p><p style=\"text-align:center; color: #777;\">Ask me questions about Trevor's resume!</p>";

    chatbotWidget.addEventListener("click", function() {
        if (chatbotIframeContainer.style.display === "none") {
            chatbotIframeContainer.style.display = "block";
            chatbotWidget.textContent = closeIconText;
        } else {
            chatbotIframeContainer.style.display = "none";
            chatbotWidget.textContent = chatIconText;
        }
    });

    document.body.appendChild(chatbotWidget);
    document.body.appendChild(chatbotIframeContainer);
    console.log("Simulated chatbot widget placeholder (v7 - text icon and iframe content) added to the page.");
});

