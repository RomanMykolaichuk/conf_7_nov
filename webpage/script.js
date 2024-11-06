// Define link groups with URLs and labels
const linkGroups = {
    main: {
        title: "Main Topics",
        links: [
            { url: "https://chatgpt.com/share/672b34c4-9c48-8013-ba28-ae5d8f309506", label: "Why Python and VS Code" },
            { url: "https://www.makeuseof.com/should-you-use-local-llms/", label: "Local LLM Pros & Cons" },
            { url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/", label: "What is RAG" },
            { url: "https://www.datacamp.com/tutorial/crew-ai", label: "AI Agents" }
        ]
    },
    llm: {
        title: "Open LLM Platforms",
        links: [
            { url: "https://ollama.com/", label: "Ollama" },
            { url: "https://groq.com/", label: "Groq" },
            { url: "https://huggingface.co/", label: "Hugging Face" },
            { url: "https://www.kaggle.com/models", label: "Kaggle Models" }
        ]
    },
    learning: {
        title: "Learning Resources",
        links: [
            { url: "https://learn.deeplearning.ai/", label: "Learn AI" },
            { url: "http://introtodeeplearning.com", label: "MIT Course" },
            { url: "https://www.youtube.com/@mrdbourke", label: "Daniel Bourke YouTube" }
        ]
    },
    rag: {
        title: "RAG Courses",
        links: [
            { url: "https://learn.deeplearning.ai/courses/building-agentic-rag-with-llamaindex", label: "Building Agentic RAG with Llamaindex" },
            { url: "https://www.youtube.com/watch?v=qN_2fnOPY-M", label: "Local RAG by Daniel Bourke" }
        ]
    },
    agents: {
        title: "AI Agents Course",
        links: [
            { url: "https://learn.deeplearning.ai/courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai", label: "Deeplearning.ai AI Agents Course" }
        ]
    }
};

// Function to create the link groups dynamically
function createLinkGroups() {
    const container = document.getElementById("linkGroups");

    for (const groupKey in linkGroups) {
        const group = linkGroups[groupKey];

        // Create group container
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";

        // Create group title
        const groupTitle = document.createElement("h2");
        groupTitle.textContent = group.title;
        groupDiv.appendChild(groupTitle);

        // Create link list
        const ul = document.createElement("ul");
        group.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.textContent = link.label;
            li.appendChild(a);
            ul.appendChild(li);
        });

        groupDiv.appendChild(ul);

        // Add "Open Group Links" button for each group
        const openGroupButton = document.createElement("button");
        openGroupButton.textContent = `Open ${group.title}`;
        openGroupButton.onclick = () => openGroupLinks(group.links);
        groupDiv.appendChild(openGroupButton);

        container.appendChild(groupDiv);
    }
}

// Delay function to pause between opening links
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to open links sequentially in a group
async function openGroupLinks(links) {
    for (const link of links) {
        window.open(link.url, "_blank");
        await delay(500); // Wait 500 ms before opening the next link
    }
}

// Function to open all links across all groups sequentially
async function openAllLinks() {
    for (const groupKey in linkGroups) {
        await openGroupLinks(linkGroups[groupKey].links);
    }
}

// Initialize the page by creating link groups
document.addEventListener("DOMContentLoaded", createLinkGroups);
