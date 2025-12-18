# 🤖 Agentic Workflow Dashboard

> A sophisticated, production-ready AI-powered dashboard showcasing intelligent agent workflows with multi-step reasoning, tool orchestration, and persistent memory.

[![Made with Rohit](https://img.shields.io/badge/Made%20with-Rohit-ff69b4?style=for-the-badge&logo=heart)](https://github.com/Rohi56u)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Python](https://img.shields.io/badge/Python-3.11-green?style=for-the-badge&logo=python)](https://www.python.org)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Usage](#usage)
- [Design Philosophy](#design-philosophy)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

The **Agentic Workflow Dashboard** is a comprehensive demonstration of how intelligent AI agents can autonomously orchestrate complex tasks through:

- **🔧 Meta-Tooling:** Dynamic tool selection and chaining where outputs from one tool become inputs for another
- **💾 Persistent Memory:** Conversation history maintained across workflow steps for context-aware reasoning
- **🎯 Workflow Orchestration:** Multi-step reasoning with automatic control flow management
- **🧠 Advanced Reasoning:** Leveraging language models for complex problem decomposition
- **👁️ Runtime Observability:** Full visibility into agent decisions and tool calls
- **🤝 Multi-Agent Coordination:** Specialized agents collaborating to solve complex problems

This project was built as part of **Workshop 5: Building agentic workflows in Python** from the AI for Bharat program, demonstrating advanced architectural patterns for intelligent agent systems.

---

## ✨ Features

### 🎨 Interactive Web Dashboard

The dashboard provides a visually stunning, fully responsive interface featuring:

| Feature | Description |
|---------|-------------|
| **Ethereal Data Garden Design** | Soft sage green and lavender palette with organic flowing layouts |
| **Parallax Hero Section** | Immersive background with smooth scroll effects and animated elements |
| **Workflow Visualization** | Step-by-step visualization of agent execution with animated cards |
| **Results Comparison** | Side-by-side analysis cards comparing smartphone specifications |
| **Feature Showcase** | Six core agentic workflow capabilities explained with icons and descriptions |
| **Glass-Morphism Effects** | Modern UI with transparency and blur effects for depth |
| **Responsive Design** | Fully optimized for desktop, tablet, and mobile devices |
| **Smooth Animations** | Gentle, organic transitions reflecting the design philosophy |

### 🐍 Python Agentic Workflow

A production-ready Python implementation featuring:

- **OpenAI Integration:** Using GPT-4 for intelligent reasoning and decision-making
- **Function Calling:** Structured tool definitions with Pydantic models for type safety
- **Tool Orchestration:** Search and analysis tools working in concert with automatic chaining
- **Error Handling:** Robust error management and graceful fallbacks
- **Extensible Architecture:** Easy to add new tools and extend capabilities

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI framework with hooks | 19.2.1 |
| **TypeScript** | Type-safe development | 5.6.3 |
| **Tailwind CSS** | Utility-first CSS framework | 4.1.14 |
| **shadcn/ui** | High-quality UI components | Latest |
| **Lucide React** | Beautiful icon library | 0.453.0 |
| **Framer Motion** | Smooth animations | 12.23.22 |
| **Vite** | Lightning-fast build tool | 7.1.7 |

### Backend (Python)

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Python** | Programming language | 3.11+ |
| **OpenAI API** | Language model and function calling | Latest |
| **Pydantic** | Data validation and schema definition | Latest |
| **Requests** | HTTP client for API calls | Latest |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22.13.0 or higher
- **Python** 3.11 or higher
- **npm** or **pnpm** package manager
- **OpenAI API Key** (for running the Python workflow)

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Rohi56u/agentic_workflow_dashboard.git
cd agentic_workflow_dashboard
```

#### 2. Frontend Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The dashboard will be available at `http://localhost:3000`

#### 3. Python Workflow Setup

```bash
# Navigate to the workflow directory
cd ../agentic_workflow

# Install Python dependencies
pip install -r requirements.txt

# Set your OpenAI API key
export OPENAI_API_KEY="your-api-key-here"

# Run the agentic workflow
python agent.py
```

---

## 📁 Project Structure

```
agentic_workflow_dashboard/
│
├── 📄 README.md                    # This file
├── 📄 AWS_BLOG_POST.md            # Comprehensive blog post about agentic workflows
├── 📄 package.json                # Node.js dependencies and scripts
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
│
├── client/                         # React frontend
│   ├── public/
│   │   ├── images/
│   │   │   ├── hero-background.png      # Hero section background
│   │   │   └── workflow-pattern.png     # Workflow pattern texture
│   │   └── index.html
│   │
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx            # Main dashboard page
│       │   └── NotFound.tsx        # 404 page
│       │
│       ├── components/
│       │   ├── ui/                 # shadcn/ui components
│       │   ├── ErrorBoundary.tsx   # Error handling
│       │   └── Map.tsx             # Google Maps integration
│       │
│       ├── contexts/
│       │   └── ThemeContext.tsx    # Theme management
│       │
│       ├── hooks/                  # Custom React hooks
│       ├── lib/                    # Utility functions
│       ├── App.tsx                 # Root component and routing
│       ├── main.tsx                # React entry point
│       └── index.css               # Global styles and design tokens
│
├── server/
│   └── index.ts                    # Express server for static serving
│
└── agentic_workflow/               # Python agentic workflow
    ├── agent.py                    # Main agentic workflow implementation
    ├── requirements.txt            # Python dependencies
    └── agent_result.txt            # Workflow execution results
```

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     User Interface                           │
│         (React Dashboard - Ethereal Data Garden)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  Orchestration Layer                         │
│        (Multi-step reasoning & workflow control)            │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    ┌────────┐  ┌────────┐  ┌──────────┐
    │ Search │  │Analyze │  │ Synthesize
    │ Tool   │  │ Tool   │  │ Results
    └────────┘  └────────┘  └──────────┘
        │            │            │
        └────────────┼────────────┘
                     ▼
        ┌─────────────────────────┐
        │  Language Model (GPT-4) │
        │   (Decision Making)     │
        └─────────────────────────┘
```

### Workflow Execution Flow

```
1. User Query
   ↓
2. Agent Analysis (LLM)
   ↓
3. Tool Selection (Search)
   ↓
4. Data Retrieval
   ↓
5. Agent Analysis (LLM)
   ↓
6. Tool Selection (Analyze)
   ↓
7. Data Processing
   ↓
8. Result Synthesis
   ↓
9. Final Response to User
```

---

## 💻 Usage

### Running the Dashboard

```bash
cd agentic_workflow_dashboard
pnpm dev
```

Navigate to `http://localhost:3000` to view the interactive dashboard. The dashboard showcases:

- **Hero Section:** Immersive introduction to agentic workflows
- **Workflow Architecture:** Visual representation of the three-step workflow
- **Results Section:** Detailed comparison of smartphone specifications
- **Features Showcase:** Six core agentic workflow capabilities
- **Call-to-Action:** Information about Workshop 5

### Running the Agentic Workflow

```bash
cd agentic_workflow
export OPENAI_API_KEY="your-api-key"
python agent.py
```

The workflow will:
1. Search for smartphone specifications
2. Analyze and compare features
3. Generate insights about battery life
4. Save results to `agent_result.txt`

### Example Output

```
--- Starting Agentic Workflow for: 'What are the key features of the latest iPhone and how does its battery life compare to the Samsung Galaxy S24?' ---

[Tool: search_web] Searching for: 'latest iPhone and Samsung Galaxy S24 specifications'...

[Tool Output] Received output from search_web.

[Tool: analyze_data] Analyzing data...

[Tool Output] Received output from analyze_data.

--- Final Answer from Agent ---
The iPhone 16 Pro Max demonstrates superior battery longevity with a 2-hour advantage over the Samsung Galaxy S24 Ultra...
```

---

## 🎨 Design Philosophy: Ethereal Data Garden

The dashboard implements a sophisticated design philosophy that makes complex AI concepts feel natural and approachable.

### Color Palette

| Color | Hex | Purpose |
|-------|-----|---------|
| **Soft Sage** | #E8F3E8 | Primary background - calming, organic |
| **Lavender** | #F0E8F8 | Secondary accent - sophisticated, ethereal |
| **Forest Green** | #2D5A3D | Primary action - natural, grounded |
| **Rose Gold** | #D4A5A5 | Highlights - warm, inviting |

### Typography

- **Display Font:** Playfair Display (elegant, sophisticated)
- **Body Font:** Lato (readable, friendly)
- **Hierarchy:** Clear visual distinction between headings and body text

### Animation Principles

- **Entrance:** Fade in with subtle upward motion (200ms ease-out)
- **Hover:** Soft glow expansion with shadow intensification
- **Transitions:** Smooth color morphs and organic movements (500ms duration)
- **Background:** Gentle floating particles with organic motion paths

---

## 🔧 Configuration

### Environment Variables

The project uses environment variables for configuration:

```bash
# Frontend (client/.env)
VITE_APP_TITLE=Agentic Workflow Dashboard
VITE_APP_LOGO=/logo.png

# Backend (Python)
OPENAI_API_KEY=your-api-key-here
```

### Customization

To customize the dashboard:

1. **Colors:** Edit CSS variables in `client/src/index.css`
2. **Typography:** Modify font imports in `client/index.html`
3. **Content:** Update text in `client/src/pages/Home.tsx`
4. **Images:** Replace images in `client/public/images/`
5. **Workflow:** Modify agent logic in `agentic_workflow/agent.py`

---

## 📚 Learning Resources

This project demonstrates concepts from **Workshop 5: Building agentic workflows in Python**:

- Building intelligent AI agents using language models
- Creating specialized agents for various use cases
- Understanding advanced architectural patterns
- Exploring runtime capabilities and observability

### Related Articles

- **AWS Blog Post:** See `AWS_BLOG_POST.md` for a comprehensive article about agentic workflows
- **OpenAI Function Calling:** https://platform.openai.com/docs/guides/function-calling
- **LangChain Agents:** https://python.langchain.com/docs/concepts/agents/

---

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Manus

The project is ready to deploy on Manus hosting:

1. Click the **Publish** button in the Management UI
2. Configure your custom domain
3. Your dashboard will be live!

### Deploy to Other Platforms

The project can be deployed to any Node.js hosting platform:

- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy`
- **AWS Amplify:** `amplify publish`
- **Heroku:** `git push heroku main`

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** and commit them: `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design works on all devices

---

## 📄 License

This project is open source and available under the **MIT License**. See the LICENSE file for details.

---

## 👨‍💻 Author

**Rohit Choudhary**

- GitHub: [@Rohi56u](https://github.com/Rohi56u)
- Created as part of the **AI for Bharat Workshop 5: Building agentic workflows in Python**

---

## 🙏 Acknowledgments

- **OpenAI** for GPT-4 and function calling capabilities
- **React Team** for the amazing frontend framework
- **Tailwind Labs** for Tailwind CSS
- **shadcn** for the beautiful UI components
- **AI for Bharat** program for the workshop opportunity

---

## 📞 Support

If you have questions or run into issues:

1. **Check the AWS Blog Post:** `AWS_BLOG_POST.md` contains detailed explanations
2. **Review the Code:** Comments throughout the codebase explain key concepts
3. **Open an Issue:** Create a GitHub issue with detailed information
4. **Start a Discussion:** Use GitHub Discussions for questions

---

## 🔐 Security

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

---

## 📈 Roadmap

Future enhancements planned for this project:

- [ ] Multi-agent coordination examples
- [ ] Advanced tool composition patterns
- [ ] Real-time agent execution visualization
- [ ] Custom tool builder interface
- [ ] Agent performance analytics dashboard
- [ ] Integration with more LLM providers
- [ ] Workflow persistence and replay
- [ ] Team collaboration features

---

## 🌟 Star History

If you find this project helpful, please consider giving it a star! ⭐

---

<div align="center">

**Made with ❤️ by Rohit Choudhary**

[![GitHub Stars](https://img.shields.io/github/stars/Rohi56u/agentic_workflow_dashboard?style=social)](https://github.com/Rohi56u/agentic_workflow_dashboard)
[![GitHub Forks](https://img.shields.io/github/forks/Rohi56u/agentic_workflow_dashboard?style=social)](https://github.com/Rohi56u/agentic_workflow_dashboard)
[![Twitter Follow](https://img.shields.io/twitter/follow/Rohi56u?style=social)](https://twitter.com/Rohi56u)

</div>
