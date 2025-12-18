# Agentic Workflow Dashboard

A sophisticated AI-powered dashboard showcasing intelligent agent workflows with multi-step reasoning, tool orchestration, and persistent memory. This project demonstrates advanced architectural patterns for building complex agentic systems.

## 🎯 Project Overview

The Agentic Workflow Dashboard is a comprehensive demonstration of how intelligent AI agents can orchestrate complex tasks through:

- **Meta-Tooling:** Dynamic tool selection and chaining, where outputs from one tool become inputs for another
- **Persistent Memory:** Conversation history maintained across workflow steps for context-aware reasoning
- **Workflow Orchestration:** Multi-step reasoning with automatic control flow management
- **Advanced Reasoning:** Leveraging language models for complex problem decomposition
- **Runtime Observability:** Full visibility into agent decisions and tool calls
- **Multi-Agent Coordination:** Specialized agents collaborating to solve complex problems

## 🚀 Features

### Interactive Web Dashboard

The dashboard provides a visually stunning interface with:

- **Ethereal Data Garden Design:** Soft sage green and lavender palette with organic flowing layouts
- **Parallax Hero Section:** Immersive background with smooth scroll effects
- **Workflow Visualization:** Step-by-step visualization of agent execution
- **Results Comparison:** Side-by-side analysis of smartphone specifications
- **Feature Showcase:** Six core agentic workflow capabilities explained
- **Glass-Morphism Effects:** Modern UI with transparency and blur effects
- **Responsive Design:** Fully optimized for desktop and mobile devices

### Python Agentic Workflow

A production-ready Python implementation featuring:

- **OpenAI Integration:** Using GPT-4 for intelligent reasoning
- **Function Calling:** Structured tool definitions with Pydantic models
- **Tool Orchestration:** Search and analysis tools working in concert
- **Error Handling:** Robust error management and fallback mechanisms

## 📋 Tech Stack

### Frontend

- **React 19:** Modern UI framework with hooks
- **Tailwind CSS 4:** Utility-first CSS framework
- **TypeScript:** Type-safe development
- **Lucide React:** Beautiful icon library
- **Framer Motion:** Smooth animations
- **shadcn/ui:** High-quality UI components

### Backend (Python)

- **OpenAI API:** Language model and function calling
- **Pydantic:** Data validation and schema definition
- **Python 3.11:** Latest Python features

## 🛠️ Installation

### Prerequisites

- Node.js 22.13.0 or higher
- Python 3.11 or higher
- npm or pnpm package manager

### Frontend Setup

```bash
cd agentic_workflow_dashboard
pnpm install
pnpm dev
```

The development server will start at `http://localhost:3000`

### Python Workflow Setup

```bash
cd ../agentic_workflow
pip install -r requirements.txt
python agent.py
```

## 📖 Usage

### Running the Dashboard

```bash
pnpm dev
```

Navigate to `http://localhost:3000` to view the interactive dashboard.

### Running the Agentic Workflow

```bash
python agent.py
```

This will execute a multi-step workflow that:
1. Searches for smartphone specifications
2. Analyzes and compares features
3. Generates insights about battery life

## 🎨 Design Philosophy

The dashboard follows the **Ethereal Data Garden** design philosophy:

- **Soft Color Palette:** Sage green (#E8F3E8) and lavender (#F0E8F8) create a calming aesthetic
- **Organic Layouts:** Flowing, non-linear sections suggest growth and evolution
- **Typography:** Playfair Display for elegant headings, Lato for readable body text
- **Animations:** Gentle, organic transitions reflect the design ethos
- **Depth & Texture:** Subtle shadows and glass effects add dimension

## 📁 Project Structure

```
agentic_workflow_dashboard/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main dashboard page
│   │   ├── components/            # Reusable UI components
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles
│   ├── public/
│   │   └── images/               # Hero and pattern images
│   └── index.html
├── server/
│   └── index.ts                  # Express server (static serving)
├── package.json
└── README.md

agentic_workflow/
├── agent.py                      # Main agentic workflow
├── requirements.txt              # Python dependencies
└── agent_result.txt              # Workflow output
```

## 🔧 Configuration

### Environment Variables

The project uses Manus-managed environment variables. Key variables:

- `VITE_APP_TITLE`: Application title
- `VITE_APP_LOGO`: Application logo URL
- `VITE_ANALYTICS_ENDPOINT`: Analytics tracking endpoint
- `VITE_ANALYTICS_WEBSITE_ID`: Analytics website ID

### Customization

To customize the dashboard:

1. **Colors:** Edit CSS variables in `client/src/index.css`
2. **Typography:** Modify font imports in `client/index.html`
3. **Content:** Update text in `client/src/pages/Home.tsx`
4. **Images:** Replace images in `client/public/images/`

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Manus

The project is ready to deploy on Manus hosting. Click the **Publish** button in the Management UI to deploy.

## 📚 Learning Resources

This project demonstrates concepts from **Workshop 5: Building agentic workflows in Python** from the AI for Bharat program:

- Building intelligent AI agents using the Strands SDK
- Creating specialized agents for various use cases
- Understanding advanced architectural patterns
- Exploring runtime capabilities and observability

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rohit Choudhary**

Created as part of the AI for Bharat Workshop 5: Building agentic workflows in Python.

---

[![Made with Rohit](https://img.shields.io/badge/Made%20with-Rohit-ff69b4?style=for-the-badge&logo=heart)](https://github.com/Rohi56u)

**Made with Rohit** ❤️

For more information about agentic workflows and advanced AI patterns, check out the [AWS Builder Center blog post](https://aws.amazon.com/blogs/builder/) about this project.
