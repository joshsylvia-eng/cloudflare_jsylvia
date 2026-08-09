// Comprehensive Search Index (Elasticsearch-like)
const searchIndex = [
    // Pages
    { id: 1, title: 'Home', category: 'page', url: 'index.html', description: 'Josh Sylvia - Principal Software Engineer & Technology Innovator homepage with CISSP certification', keywords: ['josh', 'sylvia', 'principal', 'software', 'engineer', 'technology', 'innovator', 'cissp', 'certified', 'cybersecurity', 'home', 'portfolio'] },
    { id: 2, title: 'AI & Automation Solutions', category: 'page', url: 'ai.html', description: 'AI/ML lifecycle, AI roles, MCP, RAG, Agentic AI, AI security (SecAI+), monitoring & logging, and interactive AI assistant', keywords: ['ai', 'artificial', 'intelligence', 'automation', 'machine', 'learning', 'mcp', 'rag', 'agentic', 'llm', 'groq', 'chatbot', 'assistant'] },
    { id: 3, title: 'Cybersecurity & Compliance', category: 'page', url: 'cybersecurity.html', description: 'Security architecture covering software engineering security, CompTIA AI Security+, CISSP and compliance frameworks (NIST, ISO, GDPR, FedRAMP)', keywords: ['cybersecurity', 'security', 'compliance', 'cissp', 'nist', 'iso', 'gdpr', 'ccpa', 'fedramp', 'iam', 'tls', 'incident', 'response'] },
    { id: 4, title: 'APIs & Microservices', category: 'page', url: 'apis.html', description: 'REST, GraphQL, microservices architecture, API testing and API tools documentation', keywords: ['api', 'rest', 'graphql', 'microservices', 'endpoint', 'websocket', 'grpc', 'soap', 'testing', 'documentation'] },
    { id: 5, title: 'QA Automation & Testing', category: 'page', url: 'qa.html', description: 'Selenium, Playwright, Terraform/Ansible testing, cloud testing, performance and monitoring resources', keywords: ['qa', 'quality', 'assurance', 'testing', 'selenium', 'playwright', 'automation', 'debugging'] },
    { id: 6, title: 'Tutorials', category: 'page', url: 'tutorials.html', description: 'Video tutorials and learning resources for cybersecurity, DevOps, and cloud computing', keywords: ['tutorial', 'guide', 'how', 'to', 'learn', 'video', 'github', 'education'] },
    { id: 7, title: 'About', category: 'page', url: 'about.html', description: 'Professional background, experience, certifications, technical skills, and education', keywords: ['about', 'bio', 'background', 'experience', 'skills', 'career', 'resume', 'education'] },
    { id: 8, title: 'Contact', category: 'page', url: 'contact.html', description: 'Contact information and message form to reach Josh Sylvia', keywords: ['contact', 'email', 'message', 'reach', 'out', 'communication', 'hire', 'consulting'] },
    { id: 9, title: 'Code Playground', category: 'page', url: 'playground.html', description: 'Online code editor with Monaco supporting JavaScript, Python, TypeScript, HTML, CSS, JSON, SQL, Bash, Java, C++ and Go', keywords: ['playground', 'code', 'editor', 'monaco', 'ide', 'javascript', 'python', 'typescript', 'run', 'share'] },

    // Certifications
    { id: 10, title: 'CISSP Certification', category: 'certification', url: 'index.html', description: 'Certified Information Systems Security Professional (CISSP) - Certificate Number: 2273572', keywords: ['cissp', 'certified', 'information', 'systems', 'security', 'professional', 'certificate', '2273572', 'cybersecurity'] },
    { id: 11, title: 'AWS Certified Cloud Practitioner', category: 'certification', url: 'index.html', description: 'AWS Cloud Practitioner certification - foundational understanding of AWS Cloud concepts, security and architecture', keywords: ['aws', 'cloud', 'practitioner', 'certified', 'certification', 'amazon', 'foundational'] },
    { id: 12, title: 'CompTIA AI Security+ (SecAI+)', category: 'certification', url: 'ai.html#ai-security', description: 'CompTIA AI Security+ (SecAI+, CY0-001) - vendor-neutral certification for defending AI systems, applying AI in security operations, and governing AI. Josh is certified (issued August 8, 2026).', keywords: ['comptia', 'secai', 'ai', 'security', 'certification', 'cy0', 'llm', 'artificial', 'intelligence'] },
    { id: 13, title: 'Linux Systems Administration', category: 'certification', url: 'about.html', description: 'Expertise in Linux server administration, shell scripting, system security, and enterprise Linux environments', keywords: ['linux', 'system', 'administration', 'server', 'shell', 'security', 'redhat', 'debian'] },
    { id: 14, title: 'Windows Systems Administration', category: 'certification', url: 'about.html', description: 'Proficient in Windows Server administration, Active Directory, PowerShell scripting, and enterprise Windows environments', keywords: ['windows', 'server', 'active', 'directory', 'powershell', 'administration', 'microsoft'] },
    { id: 15, title: 'Network Professional', category: 'certification', url: 'about.html', description: 'Skilled in network design, routing, switching, firewall management, and network security protocols', keywords: ['network', 'networking', 'routing', 'switching', 'firewall', 'ccna', 'security', 'protocols'] },

    // AI/ML Lifecycle
    { id: 16, title: 'AI/ML Lifecycle', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Twelve-stage AI/ML lifecycle from business problem definition through production and retirement', keywords: ['ai', 'ml', 'machine', 'learning', 'lifecycle', 'model', 'pipeline', 'stages', 'production'] },
    { id: 17, title: 'Problem Definition (AI/ML)', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Clarify the business goal, success metrics, feasibility, and ethical constraints for an AI project', keywords: ['problem', 'definition', 'business', 'goal', 'metrics', 'feasibility', 'ethics'] },
    { id: 18, title: 'Data Collection & Acquisition', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Source, license, and vet data; verify provenance to prevent data poisoning', keywords: ['data', 'collection', 'acquisition', 'source', 'license', 'provenance', 'poisoning'] },
    { id: 19, title: 'Data Preparation & Labeling', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Clean and label data; detect bias; protect PII and sensitive data', keywords: ['data', 'preparation', 'labeling', 'clean', 'bias', 'pii', 'sensitive'] },
    { id: 20, title: 'Feature Engineering', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Select and construct features; track lineage for reproducibility', keywords: ['feature', 'engineering', 'selection', 'lineage', 'reproducibility', 'extraction'] },
    { id: 21, title: 'Model Training', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Reproducible training runs with hyperparameters, data version, and code version logged', keywords: ['model', 'training', 'hyperparameters', 'reproducible', 'experiment', 'tracking'] },
    { id: 22, title: 'Evaluation & Validation', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Test on held-out and adversarial cases; measure accuracy, fairness, robustness', keywords: ['evaluation', 'validation', 'accuracy', 'fairness', 'robustness', 'adversarial', 'test'] },
    { id: 23, title: 'Model Registration', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Register in a model registry with metadata, approvals, and version control', keywords: ['model', 'registration', 'registry', 'metadata', 'approval', 'version', 'control'] },
    { id: 24, title: 'Model Deployment', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Batch, real-time API, or edge deployment with access controls, rate limits, and observability', keywords: ['deployment', 'batch', 'real-time', 'api', 'edge', 'access', 'controls', 'rate', 'limits'] },
    { id: 25, title: 'Monitoring & Observability (AI)', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Track drift, performance, latency, cost, and security events continuously in production', keywords: ['monitoring', 'observability', 'drift', 'performance', 'latency', 'cost', 'security'] },
    { id: 26, title: 'AI Governance & Compliance', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Document and audit AI behavior for NIST AI RMF, EU AI Act, ISO 42001 compliance', keywords: ['governance', 'compliance', 'audit', 'nist', 'ai', 'rmf', 'eu', 'ai', 'act', 'iso', '42001'] },
    { id: 27, title: 'Maintenance & Retraining', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Trigger retraining on drift; promote and roll back models with CI/CD', keywords: ['maintenance', 'retraining', 'retrain', 'drift', 'ci', 'cd', 'rollback', 'promote'] },
    { id: 28, title: 'Model Retirement', category: 'ai', url: 'ai.html#ai-lifecycle', description: 'Decommission models cleanly, archive artifacts and logs, migrate consumers', keywords: ['retirement', 'decommission', 'archive', 'artifacts', 'logs', 'migrate', 'shutdown'] },

    // AI Roles & Career Paths
    { id: 29, title: 'AI Roles & Career Paths', category: 'role', url: 'ai.html#ai-roles', description: 'Twelve core AI organization roles numbered in pipeline order from AI Product Manager to Governance & Ethics Officer', keywords: ['ai', 'roles', 'career', 'jobs', 'positions', 'team', 'ml', 'data', 'engineering', 'security'] },
    { id: 30, title: 'AI Product Manager', category: 'role', url: 'ai.html#ai-roles', description: 'Owns the vision, roadmap, and delivery of AI products - translating technical capability into business value', keywords: ['ai', 'product', 'manager', 'roadmap', 'vision', 'stakeholder', 'strategy', 'metrics', 'risk'] },
    { id: 31, title: 'Data Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Builds the pipelines and infrastructure that make data available, reliable, and fast for analysis and ML', keywords: ['data', 'engineer', 'pipelines', 'sql', 'python', 'spark', 'airflow', 'dbt', 'snowflake', 'bigquery', 'kafka'] },
    { id: 32, title: 'Data Scientist', category: 'role', url: 'ai.html#ai-roles', description: 'Extracts insight and builds predictive models, translating business questions into measurable ML problems', keywords: ['data', 'scientist', 'python', 'pandas', 'scikit-learn', 'sql', 'statistics', 'jupyter', 'modeling'] },
    { id: 33, title: 'ML Research Scientist', category: 'role', url: 'ai.html#ai-roles', description: 'Advances the state of the art in machine learning through novel algorithms, rigorous experiments, and publications', keywords: ['ml', 'research', 'scientist', 'pytorch', 'deep', 'learning', 'algorithms', 'distributed', 'training'] },
    { id: 34, title: 'AI/ML Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Builds and productionizes ML models and systems end to end - implementing algorithms and deploying reliable services', keywords: ['ai', 'ml', 'engineer', 'pytorch', 'tensorflow', 'fastapi', 'docker', 'distributed', 'systems'] },
    { id: 35, title: 'AI Engineer (GenAI/LLM)', category: 'role', url: 'ai.html#ai-roles', description: 'Builds generative AI applications - RAG pipelines, chatbots, and agentic systems using LLMs, embeddings, and orchestration frameworks', keywords: ['ai', 'engineer', 'genai', 'llm', 'rag', 'langchain', 'langgraph', 'vector', 'databases', 'openai', 'mcp', 'prompting'] },
    { id: 36, title: 'Prompt Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Designs and optimizes instructions that guide LLM and agent behavior - turning vague requirements into precise, reliable system prompts', keywords: ['prompt', 'engineer', 'llm', 'system', 'prompts', 'evaluation', 'red', 'teaming', 'rag', 'instructions'] },
    { id: 37, title: 'NLP Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Builds systems that process and generate language - from search and classification to translation and conversational AI', keywords: ['nlp', 'natural', 'language', 'engineer', 'pytorch', 'transformers', 'spacy', 'nltk', 'vector', 'search'] },
    { id: 38, title: 'Computer Vision Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Builds systems that understand images and video - object detection, segmentation, facial recognition, and generative visual media', keywords: ['computer', 'vision', 'engineer', 'opencv', 'cnn', 'pytorch', 'object', 'detection', 'segmentation', 'onnx'] },
    { id: 39, title: 'MLOps Engineer', category: 'role', url: 'ai.html#ai-roles', description: 'Bridges data science and IT operations - building the infrastructure that trains, deploys, and monitors ML models in production', keywords: ['mlops', 'engineer', 'docker', 'kubernetes', 'mlflow', 'ci', 'cd', 'terraform', 'aws', 'gcp', 'azure'] },
    { id: 40, title: 'AI Security Architect', category: 'role', url: 'ai.html#ai-roles', description: 'Designs and oversees security for AI systems end to end - aligned with NIST AI RMF, OWASP LLM Top 10, and MITRE ATLAS', keywords: ['ai', 'security', 'architect', 'threat', 'modeling', 'owasp', 'llm', 'nist', 'mitre', 'atlas', 'zero', 'trust'] },
    { id: 41, title: 'AI Governance & Ethics Officer', category: 'role', url: 'ai.html#ai-roles', description: 'Ensures AI is deployed responsibly, ethically, and in compliance with law and policy - owning governance, risk registers, and audits', keywords: ['ai', 'governance', 'ethics', 'officer', 'grc', 'nist', 'eu', 'ai', 'act', 'iso', '42001', 'gdpr', 'audit'] },

    // MCP Integration
    { id: 42, title: 'MCP Integration', category: 'ai', url: 'ai.html#mcp', description: 'Model Context Protocol (MCP) connects AI models to tools, data, and context in a standardized way', keywords: ['mcp', 'model', 'context', 'protocol', 'integration', 'server', 'tools', 'ai', 'agent', 'docker'] },
    { id: 43, title: 'Model Context Protocol (MCP) Server', category: 'ai', url: 'ai.html#mcp', description: 'Docker container running the MCP server for seamless AI model integration and context management', keywords: ['mcp', 'server', 'docker', 'container', 'context', 'models', 'integration', 'agentic'] },

    // Retrieval-Augmented Generation (RAG)
    { id: 44, title: 'Retrieval-Augmented Generation (RAG)', category: 'ai', url: 'ai.html#rag', description: 'RAG grounds LLM answers in retrieved knowledge instead of relying on the model\'s memory alone', keywords: ['rag', 'retrieval', 'augmented', 'generation', 'llm', 'knowledge', 'embedding', 'context', 'grounding'] },
    { id: 45, title: 'Elastic Search (RAG)', category: 'ai', url: 'ai.html#rag', description: 'Comprehensive search index covering cybersecurity, cloud architecture, DevOps, and AI development with 12+ specialized documents', keywords: ['elastic', 'search', 'elasticsearch', 'index', 'retrieval', 'documents', 'knowledge', 'base'] },
    { id: 46, title: 'Document Retrieval (RAG)', category: 'ai', url: 'ai.html#rag', description: 'Matches user queries with relevant expertise content using keyword and semantic analysis', keywords: ['document', 'retrieval', 'semantic', 'keyword', 'search', 'query', 'matching'] },
    { id: 47, title: 'Context-Aware Responses (RAG)', category: 'ai', url: 'ai.html#rag', description: 'Dynamic system prompts inject retrieved context into LLM requests for accurate, detailed answers', keywords: ['context', 'aware', 'responses', 'system', 'prompt', 'injection', 'llm', 'accurate'] },

    // Agentic AI
    { id: 48, title: 'Agentic AI', category: 'ai', url: 'ai.html#agentic-ai', description: 'Autonomous AI systems that plan, reason, and act to achieve goals - using tools, memory, and guardrails instead of just generating text', keywords: ['agentic', 'ai', 'agents', 'autonomous', 'planning', 'reasoning', 'tools', 'memory', 'guardrails'] },
    { id: 49, title: 'Agentic AI Core Capabilities', category: 'ai', url: 'ai.html#agentic-ai', description: 'Autonomy, tool use, memory, planning & reasoning, reflection, and multi-agent orchestration', keywords: ['agentic', 'autonomy', 'tool', 'use', 'memory', 'planning', 'reasoning', 'reflection', 'multi-agent', 'capabilities'] },
    { id: 50, title: 'Agentic AI Architecture Components', category: 'ai', url: 'ai.html#agentic-ai', description: 'Reasoning engine, system prompt, tools & function calling, memory systems, orchestrator, guardrails, and observability', keywords: ['agentic', 'architecture', 'reasoning', 'engine', 'system', 'prompt', 'function', 'calling', 'orchestrator', 'guardrails', 'telemetry'] },
    { id: 51, title: 'Agentic Design Patterns', category: 'ai', url: 'ai.html#agentic-ai', description: 'ReAct, plan-and-execute, tool-calling loop, reflection & self-critique, multi-agent orchestration, human-in-the-loop, retrieval-augmented agents', keywords: ['agentic', 'design', 'patterns', 'react', 'plan', 'execute', 'reflection', 'human-in-the-loop', 'multi-agent', 'retrieval'] },
    { id: 52, title: 'ReAct (Reason + Act) Pattern', category: 'ai', url: 'ai.html#agentic-ai', description: 'Design pattern that interleaves reasoning with actions and observation for agent behavior', keywords: ['react', 'reason', 'act', 'pattern', 'agentic', 'reasoning', 'action', 'observation'] },
    { id: 53, title: 'Types of AI Agents', category: 'ai', url: 'ai.html#agentic-ai', description: 'Reactive, model-based, goal-based, utility-based, learning, conversational, coding, research, and SOC agents', keywords: ['agents', 'types', 'reactive', 'model-based', 'goal-based', 'utility', 'learning', 'conversational', 'coding', 'research', 'soc'] },
    { id: 54, title: 'Agentic AI Frameworks & Tools', category: 'ai', url: 'ai.html#agentic-ai', description: 'LangChain/LangGraph, LlamaIndex, Microsoft AutoGen, CrewAI, OpenAI Agents, MCP, vector databases, and guardrails frameworks', keywords: ['langchain', 'langgraph', 'llamaindex', 'autogen', 'crewai', 'openai', 'agents', 'mcp', 'frameworks', 'tools'] },
    { id: 55, title: 'Agentic AI Use Cases', category: 'ai', url: 'ai.html#agentic-ai', description: 'Autonomous software engineering, SOC operations, customer support, research & analysis, IT self-healing, and business process orchestration', keywords: ['agentic', 'use', 'cases', 'software', 'engineering', 'soc', 'customer', 'support', 'research', 'it', 'operations', 'orchestration'] },

    // AI Security
    { id: 56, title: 'AI Security', category: 'security', url: 'ai.html#ai-security', description: 'Securing AI systems, using AI in security operations, and governing AI responsibly - aligned with CompTIA SecAI+', keywords: ['ai', 'security', 'secai', 'llm', 'owasp', 'controls', 'grc', 'artificial', 'intelligence', 'cybersecurity'] },
    { id: 57, title: 'OWASP Top 10 for LLM Applications (2025)', category: 'security', url: 'ai.html#owasp-llm', description: 'The ten most critical security risks for Large Language Model applications including prompt injection and data poisoning', keywords: ['owasp', 'top', '10', 'llm', 'large', 'language', 'model', 'risks', 'prompt', 'injection', '2025'] },
    { id: 58, title: 'Prompt Injection', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - malicious instructions hijack the model\'s behavior', keywords: ['prompt', 'injection', 'llm', 'owasp', 'jailbreak', 'attack', 'security'] },
    { id: 59, title: 'Sensitive Information Disclosure (LLM)', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - models leak training data, secrets, or other users\' content', keywords: ['sensitive', 'information', 'disclosure', 'data', 'leak', 'secrets', 'llm', 'owasp'] },
    { id: 60, title: 'AI Supply Chain Security', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - compromised models, dependencies, or plugins', keywords: ['supply', 'chain', 'compromised', 'models', 'dependencies', 'plugins', 'llm', 'owasp', 'sbom'] },
    { id: 61, title: 'Data and Model Poisoning', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - corrupted training data or embedded backdoors', keywords: ['data', 'model', 'poisoning', 'backdoor', 'corrupted', 'training', 'llm', 'owasp'] },
    { id: 62, title: 'Improper Output Handling', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - unsanitized output executed in downstream systems', keywords: ['improper', 'output', 'handling', 'unsanitized', 'downstream', 'execution', 'llm', 'owasp'] },
    { id: 63, title: 'Excessive Agency (LLM)', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - agents with too many tools or permissions take harmful actions', keywords: ['excessive', 'agency', 'tools', 'permissions', 'harmful', 'actions', 'llm', 'owasp'] },
    { id: 64, title: 'System Prompt Leakage', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - hidden instructions extracted from the model', keywords: ['system', 'prompt', 'leakage', 'extraction', 'hidden', 'instructions', 'llm', 'owasp'] },
    { id: 65, title: 'Vector and Embedding Weaknesses', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - attacks on RAG and vector-store retrieval', keywords: ['vector', 'embedding', 'weaknesses', 'rag', 'vector-store', 'retrieval', 'llm', 'owasp'] },
    { id: 66, title: 'AI Misinformation', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - fabricated or wrong outputs trusted without verification', keywords: ['misinformation', 'fabrication', 'hallucination', 'false', 'outputs', 'llm', 'owasp', 'trust'] },
    { id: 67, title: 'Unbounded Consumption (LLM)', category: 'security', url: 'ai.html#owasp-llm', description: 'OWASP LLM risk - runaway loops burning tokens, quota, and cost', keywords: ['unbounded', 'consumption', 'runaway', 'tokens', 'quota', 'cost', 'llm', 'owasp', 'budget'] },
    { id: 68, title: 'Security Controls for AI Systems', category: 'security', url: 'ai.html#ai-controls', description: 'Gateway & input controls, guardrails & output filtering, access controls, data security, monitoring & auditing, and Secure MLOps', keywords: ['ai', 'security', 'controls', 'gateway', 'guardrails', 'access', 'data', 'monitoring', 'mlsecops'] },
    { id: 69, title: 'Secure MLOps (MLSecOps)', category: 'security', url: 'ai.html#ai-controls', description: 'Signed artifacts, secure registries, SBOMs, and adversarial testing for ML pipelines', keywords: ['mlsecops', 'secure', 'mlops', 'signed', 'artifacts', 'sbom', 'adversarial', 'testing', 'registry'] },
    { id: 70, title: 'AI GRC Frameworks', category: 'compliance', url: 'ai.html#ai-grc', description: 'Governance, Risk & Compliance frameworks for AI - NIST AI RMF, EU AI Act, ISO/IEC 42001, OECD AI Principles, GDPR, MITRE ATLAS', keywords: ['grc', 'governance', 'risk', 'compliance', 'nist', 'ai', 'rmf', 'eu', 'ai', 'act', 'iso', '42001', 'oecd', 'mitre', 'atlas', 'gdpr'] },
    { id: 71, title: 'NIST AI Risk Management Framework', category: 'compliance', url: 'ai.html#ai-grc', description: 'Govern, map, measure, and manage AI risk - NIST AI RMF', keywords: ['nist', 'ai', 'rmf', 'risk', 'management', 'framework', 'govern', 'map', 'measure'] },
    { id: 72, title: 'EU AI Act', category: 'compliance', url: 'ai.html#ai-grc', description: 'Risk-tiered EU regulation with transparency and human oversight requirements for AI', keywords: ['eu', 'ai', 'act', 'european', 'union', 'regulation', 'risk', 'transparency', 'oversight'] },
    { id: 73, title: 'ISO/IEC 42001', category: 'compliance', url: 'ai.html#ai-grc', description: 'AI management system standard with ISO/IEC 23894 for AI risk management', keywords: ['iso', 'iec', '42001', 'ai', 'management', 'system', 'standard', '23894', 'risk'] },
    { id: 74, title: 'MITRE ATLAS', category: 'compliance', url: 'ai.html#ai-grc', description: 'Adversarial threat landscape, tactics, and techniques for AI systems', keywords: ['mitre', 'atlas', 'adversarial', 'threat', 'tactics', 'techniques', 'ai', 'security'] },
    { id: 75, title: 'AI-Assisted Security in Action', category: 'security', url: 'ai.html#ai-security', description: 'Using AI for anomaly detection, UEBA, phishing triage, SOAR automation, and threat hunting - while managing AI-enabled attacker risks', keywords: ['ai', 'assisted', 'security', 'anomaly', 'detection', 'ueba', 'phishing', 'soar', 'threat', 'hunting', 'deepfakes'] },

    // Monitoring & Logging
    { id: 76, title: 'Continuous Monitoring & Logging', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Monitoring and logging for production AI - drift, performance, security events, resource and cost tracking', keywords: ['monitoring', 'logging', 'drift', 'observability', 'telemetry', 'ai', 'production', 'alerts'] },
    { id: 77, title: 'Model Drift Detection', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Data drift, concept drift, and prediction drift signal that a model is degrading', keywords: ['model', 'drift', 'data', 'drift', 'concept', 'drift', 'prediction', 'detection', 'degrading'] },
    { id: 78, title: 'AI Logging Best Practices', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Prompt & response logs, model metadata, token & cost accounting, PII redaction, retention, access control, and alerting', keywords: ['logging', 'best', 'practices', 'prompt', 'response', 'metadata', 'token', 'cost', 'pii', 'redaction', 'retention'] },
    { id: 79, title: 'ML Platforms (MLflow, W&B, Kubeflow)', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Experiment tracking and ML pipeline platforms - MLflow, Weights & Biases, Kubeflow', keywords: ['mlflow', 'weights', 'biases', 'wandb', 'kubeflow', 'ml', 'platforms', 'experiment', 'tracking', 'pipelines'] },
    { id: 80, title: 'Drift & Quality Tools', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Evidently AI, Arize AI, and WhyLabs for drift detection and quality dashboards', keywords: ['evidently', 'arize', 'whylabs', 'drift', 'quality', 'dashboards', 'monitoring', 'ml'] },
    { id: 81, title: 'LLM Observability Tools', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Langfuse, LangSmith, Helicone, Traceloop for prompt traces, cost, and quality', keywords: ['langfuse', 'langsmith', 'helicone', 'traceloop', 'llm', 'observability', 'traces', 'cost', 'quality'] },
    { id: 82, title: 'Infrastructure Monitoring (Prometheus, Grafana)', category: 'monitoring', url: 'ai.html#monitoring-logging', description: 'Prometheus + Grafana, Datadog, CloudWatch, ELK stack for metrics and logs', keywords: ['prometheus', 'grafana', 'datadog', 'cloudwatch', 'elk', 'infrastructure', 'metrics', 'logs'] },

    // Interactive AI Assistant
    { id: 83, title: 'Interactive AI Assistant', category: 'ai', url: 'ai.html#chatbot', description: 'Interactive AI chatbot powered by Groq - ask questions about technology, get help with coding, or explore AI capabilities (currently under construction)', keywords: ['chatbot', 'ai', 'assistant', 'groq', 'chat', 'conversation', 'llm', 'coding', 'help'] },

    // Cybersecurity: Software Engineering Security
    { id: 84, title: 'Software Engineering Security Fundamentals', category: 'security', url: 'cybersecurity.html#software-engineering', description: 'Integrating security principles throughout the entire development lifecycle - secure coding, version control, access management, and encryption', keywords: ['software', 'engineering', 'security', 'secure', 'coding', 'version', 'control', 'access', 'encryption', 'sdlc'] },
    { id: 85, title: 'Versioning & Version Control Security', category: 'security', url: 'cybersecurity.html#versioning', description: 'Semantic versioning (SemVer), signed commits with GPG, branch protection, audit logs, and secret scanning', keywords: ['versioning', 'version', 'control', 'git', 'semver', 'semantic', 'signed', 'commits', 'gpg', 'branch', 'protection'] },
    { id: 86, title: 'Identity & Access Management (IAM)', category: 'security', url: 'cybersecurity.html#iam', description: 'Authentication (MFA, SSO, passwordless), authorization (RBAC, ABAC), least privilege, identity governance, and audit logging', keywords: ['iam', 'identity', 'access', 'management', 'authentication', 'authorization', 'mfa', 'sso', 'rbac', 'abac', 'least', 'privilege'] },
    { id: 87, title: 'Transport Layer Security (TLS/SSL)', category: 'security', url: 'cybersecurity.html#tls', description: 'TLS 1.2/1.3, strong cipher suites, certificate management, HSTS, forward secrecy, and disabling legacy protocols', keywords: ['tls', 'ssl', 'transport', 'layer', 'security', 'encryption', 'certificates', 'hsts', 'cipher', 'forward', 'secrecy'] },
    { id: 88, title: 'API Security', category: 'security', url: 'cybersecurity.html#api-security', description: 'OAuth 2.0, OpenID Connect, API keys, rate limiting, input validation, request signing, and API gateway security', keywords: ['api', 'security', 'oauth', 'openid', 'connect', 'keys', 'rate', 'limiting', 'validation', 'gateway'] },
    { id: 89, title: 'OWASP Top 10 API Risks', category: 'security', url: 'cybersecurity.html#api-security', description: 'BOLA, broken authentication, broken object property level authorization, unrestricted resource consumption, and broken function level authorization', keywords: ['owasp', 'api', 'top', '10', 'bola', 'broken', 'object', 'authorization', 'authentication', 'risks'] },
    { id: 90, title: 'Secure Coding Practices', category: 'security', url: 'cybersecurity.html#secure-coding', description: 'Input validation, parameterized queries, output encoding, secure error handling, and dependency management', keywords: ['secure', 'coding', 'practices', 'input', 'validation', 'sql', 'injection', 'xss', 'output', 'encoding'] },
    { id: 91, title: 'Common Vulnerabilities (SQLi, XSS, CSRF)', category: 'security', url: 'cybersecurity.html#secure-coding', description: 'SQL injection, cross-site scripting (XSS), CSRF, command injection, and insecure deserialization prevention', keywords: ['sql', 'injection', 'xss', 'cross-site', 'scripting', 'csrf', 'command', 'injection', 'deserialization', 'vulnerabilities'] },
    { id: 92, title: 'Authentication & Authorization Mechanisms', category: 'security', url: 'cybersecurity.html#auth-authz', description: 'Password, MFA, FIDO2, hardware tokens, SSO; RBAC, ABAC, and ACL authorization models', keywords: ['authentication', 'authorization', 'mfa', 'fido2', 'passwordless', 'tokens', 'sso', 'rbac', 'abac', 'acl'] },

    // Cybersecurity: CompTIA AI Security+
    { id: 93, title: 'CompTIA AI Security+ (page)', category: 'certification', url: 'cybersecurity.html#comptia-aisec', description: 'CompTIA AI Security+ certification content - AI data security, model security, prompt injection, and AI governance', keywords: ['comptia', 'ai', 'security', 'data', 'model', 'governance', 'prompt', 'injection', 'certification'] },
    { id: 94, title: 'AI Security Fundamentals', category: 'security', url: 'cybersecurity.html#ai-security-basics', description: 'Adversarial examples, model poisoning, supply chain risks, model extraction, and backdoor attacks', keywords: ['ai', 'security', 'adversarial', 'examples', 'model', 'poisoning', 'supply', 'chain', 'extraction', 'backdoor'] },
    { id: 95, title: 'Data Security for AI Systems', category: 'security', url: 'cybersecurity.html#data-security-ai', description: 'Data classification, encryption, anonymization, differential privacy, lineage tracking, and privacy considerations', keywords: ['ai', 'data', 'security', 'classification', 'encryption', 'anonymization', 'differential', 'privacy', 'lineage'] },
    { id: 96, title: 'Model Security & Prompt Injection Attacks', category: 'security', url: 'cybersecurity.html#model-security', description: 'Prompt injection, jailbreaking, data exfiltration, adversarial prompts, model poisoning and defense strategies', keywords: ['model', 'security', 'prompt', 'injection', 'jailbreaking', 'exfiltration', 'adversarial', 'red-teaming', 'defense'] },
    { id: 97, title: 'AI Governance & Ethical Considerations', category: 'security', url: 'cybersecurity.html#ai-governance', description: 'Ethics review boards, explainability (XAI/LIME), bias audits, human-in-the-loop, and accountability frameworks', keywords: ['ai', 'governance', 'ethics', 'explainability', 'xai', 'lime', 'bias', 'audits', 'accountability', 'human-in-the-loop'] },

    // Cybersecurity: CISSP & Compliance
    { id: 98, title: 'CISSP & Compliance Frameworks', category: 'compliance', url: 'cybersecurity.html#cissp-compliance', description: 'CISSP 8 domains and compliance frameworks - NIST 800-53, ISO 27001, CCPA/GDPR, PHI/PII, FISMA/FedRAMP, risk management, incident response', keywords: ['cissp', 'compliance', 'frameworks', 'nist', 'iso', 'gdpr', 'ccpa', 'fedramp', 'fisma', 'hipaa', 'risk'] },
    { id: 99, title: 'NIST 800-53 Security Controls', category: 'compliance', url: 'cybersecurity.html#nist-800-53', description: 'Security control catalog for federal information systems - access control, authentication, audit, contingency planning, and system integrity', keywords: ['nist', '800-53', 'security', 'controls', 'federal', 'access', 'control', 'audit', 'contingency', 'compliance'] },
    { id: 100, title: 'ISO 27001 Information Security Management', category: 'compliance', url: 'cybersecurity.html#iso-27001', description: 'International standard for Information Security Management Systems (ISMS) - risk assessment, Annex A controls, and certification', keywords: ['iso', '27001', 'isms', 'information', 'security', 'management', 'annex', 'a', 'risk', 'assessment', 'certification'] },
    { id: 101, title: 'CCPA & GDPR Privacy Regulations', category: 'compliance', url: 'cybersecurity.html#ccpa-gdpr', description: 'California Consumer Privacy Act and GDPR - right to know, delete, opt-out, data portability, and breach notification', keywords: ['ccpa', 'gdpr', 'privacy', 'california', 'data', 'protection', 'opt-out', 'portability', 'breach', 'regulation'] },
    { id: 102, title: 'PHI & PII Protection', category: 'compliance', url: 'cybersecurity.html#phi-pii', description: 'HIPAA/HITECH for Protected Health Information and PII protection strategies - encryption, de-identification, and access control', keywords: ['phi', 'pii', 'hipaa', 'hitech', 'health', 'information', 'personally', 'identifiable', 'encryption', 'de-identification'] },
    { id: 103, title: 'FISMA & FedRAMP Federal Compliance', category: 'compliance', url: 'cybersecurity.html#fisma-fedramp', description: 'FISMA federal information security law and FedRAMP cloud authorization baselines (low, moderate, high impact)', keywords: ['fisma', 'fedramp', 'federal', 'compliance', 'cloud', 'authorization', 'baselines', '3pao', 'sar', 'poam'] },
    { id: 104, title: 'Enterprise Risk Management', category: 'compliance', url: 'cybersecurity.html#risk-management', description: 'NIST RMF (prepare, categorize, select, implement, assess, authorize, monitor) and risk assessment methodology', keywords: ['risk', 'management', 'nist', 'rmf', 'categorize', 'assess', 'authorize', 'monitor', 'likelihood', 'impact', 'mitigate'] },
    { id: 105, title: 'Incident Response & Management', category: 'security', url: 'cybersecurity.html#incident-response', description: 'IR lifecycle - preparation, detection, containment, eradication, recovery, post-incident - and incident response team roles', keywords: ['incident', 'response', 'management', 'containment', 'eradication', 'recovery', 'detection', 'forensics', 'lifecycle', 'csirt'] },

    // APIs: REST
    { id: 106, title: 'REST APIs', category: 'api', url: 'apis.html#rest-api', description: 'Representational State Transfer - the foundation of modern web APIs with client-server, stateless, cacheable, and layered principles', keywords: ['rest', 'api', 'representational', 'state', 'transfer', 'http', 'client-server', 'stateless', 'cacheable'] },
    { id: 107, title: 'REST Principles', category: 'api', url: 'apis.html#rest-api', description: 'Client-server architecture, stateless communication, cacheable responses, layered system, and code on demand', keywords: ['rest', 'principles', 'client-server', 'stateless', 'cacheable', 'layered', 'code', 'on', 'demand'] },
    { id: 108, title: 'HTTP Methods (GET, POST, PUT, PATCH, DELETE)', category: 'api', url: 'apis.html#rest-api', description: 'HTTP methods for REST APIs - GET retrieve, POST create, PUT update, PATCH partial updates, DELETE remove', keywords: ['http', 'methods', 'get', 'post', 'put', 'patch', 'delete', 'crud', 'rest', 'verbs'] },
    { id: 109, title: 'REST API Best Practices', category: 'api', url: 'apis.html#rest-api', description: 'Proper HTTP status codes, API versioning, and consistent response formats', keywords: ['rest', 'best', 'practices', 'status', 'codes', 'versioning', 'response', 'format', 'json'] },

    // APIs: GraphQL
    { id: 110, title: 'GraphQL', category: 'api', url: 'apis.html#graphql', description: 'Query language for APIs - flexible and efficient data fetching with strongly typed schemas', keywords: ['graphql', 'query', 'schema', 'mutation', 'api', 'type', 'system', 'resolvers'] },
    { id: 111, title: 'GraphQL vs REST', category: 'api', url: 'apis.html#graphql', description: 'Comparison - single endpoint vs multiple endpoints, over-fetching, under-fetching, and type system', keywords: ['graphql', 'rest', 'comparison', 'endpoint', 'over-fetching', 'under-fetching', 'type', 'system'] },
    { id: 112, title: 'GraphQL Schema', category: 'api', url: 'apis.html#graphql', description: 'GraphQL type definitions - User, Post, Query and Mutation types with strongly typed fields', keywords: ['graphql', 'schema', 'type', 'query', 'mutation', 'definition', 'fields'] },
    { id: 113, title: 'GraphQL Server Setup (Apollo)', category: 'api', url: 'apis.html#graphql', description: 'Apollo Server setup with typeDefs, resolvers, and queries', keywords: ['graphql', 'apollo', 'server', 'setup', 'resolvers', 'typedefs', 'node'] },

    // APIs: Microservices
    { id: 114, title: 'Microservices Architecture', category: 'api', url: 'apis.html#microservices', description: 'Building scalable, maintainable systems with single responsibility, bounded context, independent deployment, and failure isolation', keywords: ['microservices', 'architecture', 'scalable', 'bounded', 'context', 'deployment', 'failure', 'isolation'] },
    { id: 115, title: 'Microservices Communication Patterns', category: 'api', url: 'apis.html#microservices', description: 'Synchronous (REST, gRPC, GraphQL), asynchronous (message queues, event streaming), and events (pub/sub, event sourcing)', keywords: ['microservices', 'communication', 'synchronous', 'asynchronous', 'message', 'queues', 'event', 'streaming', 'pub', 'sub', 'sourcing'] },
    { id: 116, title: 'Service Discovery', category: 'api', url: 'apis.html#microservices', description: 'Consul service discovery - service registration, health checks, and dynamic discovery', keywords: ['service', 'discovery', 'consul', 'registration', 'health', 'checks', 'microservices'] },
    { id: 117, title: 'API Gateway Pattern', category: 'api', url: 'apis.html#microservices', description: 'Single entry point, request routing, and cross-cutting concerns (authentication, rate limiting, logging)', keywords: ['api', 'gateway', 'pattern', 'single', 'entry', 'point', 'routing', 'authentication', 'rate', 'limiting'] },

    // APIs: Testing
    { id: 118, title: 'API Testing', category: 'testing', url: 'apis.html#api-testing', description: 'Unit, integration, end-to-end, performance, and security tests for APIs and microservices', keywords: ['api', 'testing', 'unit', 'integration', 'end-to-end', 'performance', 'security', 'tests'] },
    { id: 119, title: 'Postman / Newman Testing', category: 'testing', url: 'apis.html#api-testing', description: 'Postman collections, environment variables, request chaining, and Newman CLI automation', keywords: ['postman', 'newman', 'api', 'testing', 'collections', 'environment', 'chaining', 'automation'] },
    { id: 120, title: 'Jest API Testing', category: 'testing', url: 'apis.html#api-testing', description: 'Jest with supertest for API testing - HTTP assertions and endpoint verification', keywords: ['jest', 'supertest', 'api', 'testing', 'javascript', 'node', 'assertions', 'unit'] },
    { id: 121, title: 'Contract Testing', category: 'testing', url: 'apis.html#api-testing', description: 'Consumer-driven contracts with Pact, OpenAPI validation, and JSON schema testing', keywords: ['contract', 'testing', 'pact', 'consumer-driven', 'openapi', 'schema', 'validation'] },

    // APIs: Additional Types
    { id: 122, title: 'WebSocket APIs', category: 'api', url: 'apis.html#additional-apis', description: 'Real-time bidirectional communication with WebSocket servers and clients', keywords: ['websocket', 'api', 'real-time', 'bidirectional', 'socket', 'events'] },
    { id: 123, title: 'gRPC APIs', category: 'api', url: 'apis.html#additional-apis', description: 'High-performance RPC framework using Protocol Buffers and typed service definitions', keywords: ['grpc', 'api', 'rpc', 'protocol', 'buffers', 'protobuf', 'high-performance', 'service'] },
    { id: 124, title: 'SOAP APIs', category: 'api', url: 'apis.html#additional-apis', description: 'XML-based protocol with WSDL schema validation, enterprise integration, and WS-Security', keywords: ['soap', 'api', 'xml', 'wsdl', 'ws-security', 'enterprise', 'protocol'] },
    { id: 125, title: 'WebHooks', category: 'api', url: 'apis.html#additional-apis', description: 'Event-driven APIs where servers push data to clients in real-time', keywords: ['webhooks', 'event-driven', 'push', 'notifications', 'realtime', 'integration', 'saas'] },

    // APIs: Tools
    { id: 126, title: 'Swagger / OpenAPI', category: 'tools', url: 'apis.html#api-tools', description: 'Standard for API documentation and specification', keywords: ['swagger', 'openapi', 'documentation', 'specification', 'api', 'yaml', 'json'] },
    { id: 127, title: 'Postman', category: 'tools', url: 'apis.html#api-tools', description: 'API development, testing, and documentation platform', keywords: ['postman', 'api', 'testing', 'development', 'documentation', 'client'] },
    { id: 128, title: 'Insomnia', category: 'tools', url: 'apis.html#api-tools', description: 'REST client and API testing tool', keywords: ['insomnia', 'rest', 'client', 'api', 'testing', 'tool'] },
    { id: 129, title: 'GraphQL Playground', category: 'tools', url: 'apis.html#api-tools', description: 'Interactive GraphQL IDE for testing queries', keywords: ['graphql', 'playground', 'ide', 'queries', 'testing'] },
    { id: 130, title: 'OWASP ZAP', category: 'tools', url: 'apis.html#api-tools', description: 'Security testing for APIs and web applications', keywords: ['owasp', 'zap', 'security', 'testing', 'vulnerability', 'scanning', 'penetration'] },
    { id: 131, title: 'k6 Load Testing', category: 'tools', url: 'apis.html#api-tools', description: 'Modern load testing for APIs and microservices', keywords: ['k6', 'load', 'testing', 'performance', 'api', 'microservices'] },
    { id: 132, title: 'Kong API Gateway', category: 'tools', url: 'apis.html#api-tools', description: 'API gateway and management platform', keywords: ['kong', 'api', 'gateway', 'management', 'platform', 'routing'] },

    // QA: Selenium
    { id: 133, title: 'Selenium WebDriver', category: 'testing', url: 'qa.html#selenium', description: 'Industry-standard browser automation framework with multi-browser and multi-language support', keywords: ['selenium', 'webdriver', 'browser', 'automation', 'testing', 'python', 'java', 'c#', 'javascript'] },
    { id: 134, title: 'Page Object Model', category: 'testing', url: 'qa.html#selenium', description: 'Separate page structure from test logic for maintainable tests', keywords: ['page', 'object', 'model', 'pom', 'selenium', 'test', 'maintainability', 'pattern'] },
    { id: 135, title: 'Selenium Best Practices', category: 'testing', url: 'qa.html#selenium', description: 'Page Object Model, explicit waits with WebDriverWait, and test data management', keywords: ['selenium', 'best', 'practices', 'explicit', 'waits', 'test', 'data', 'management', 'webdriverwait'] },

    // QA: Playwright
    { id: 136, title: 'Playwright', category: 'testing', url: 'qa.html#playwright', description: 'Modern browser automation by Microsoft with auto-waiting, network mocking, and parallel execution', keywords: ['playwright', 'browser', 'automation', 'testing', 'microsoft', 'node', 'e2e'] },
    { id: 137, title: 'Playwright vs Selenium', category: 'testing', url: 'qa.html#playwright', description: 'Comparison - speed, reliability, and setup complexity between Playwright and Selenium', keywords: ['playwright', 'selenium', 'comparison', 'speed', 'reliability', 'setup'] },

    // QA: Terraform & Ansible
    { id: 138, title: 'Terraform Testing', category: 'testing', url: 'qa.html#terraform', description: 'Infrastructure as Code testing with Terratest - resource validation, drift detection, and compliance checking', keywords: ['terraform', 'testing', 'terratest', 'iac', 'infrastructure', 'as', 'code', 'drift', 'compliance'] },
    { id: 139, title: 'Terratest Framework', category: 'testing', url: 'qa.html#terraform', description: 'Go testing framework for infrastructure as code with Terraform apply/destroy lifecycle', keywords: ['terratest', 'go', 'testing', 'terraform', 'framework', 'infrastructure', 'gruntwork'] },
    { id: 140, title: 'Ansible Testing', category: 'testing', url: 'qa.html#ansible', description: 'Configuration management testing with Molecule and Testinfra', keywords: ['ansible', 'testing', 'molecule', 'testinfra', 'configuration', 'management', 'playbooks'] },
    { id: 141, title: 'Molecule Framework', category: 'testing', url: 'qa.html#ansible', description: 'Ansible role testing framework with Docker drivers and testinfra verification', keywords: ['molecule', 'ansible', 'testing', 'framework', 'docker', 'roles', 'testinfra'] },
    { id: 142, title: 'Testinfra', category: 'testing', url: 'qa.html#ansible', description: 'Python testing for infrastructure - assert packages, services, and system state', keywords: ['testinfra', 'python', 'infrastructure', 'testing', 'pytest', 'assertions', 'services'] },

    // QA: Cloud Testing
    { id: 143, title: 'Cloud Testing', category: 'testing', url: 'qa.html#cloud-testing', description: 'Multi-cloud testing strategies and tools for AWS and Azure', keywords: ['cloud', 'testing', 'aws', 'azure', 'device', 'farm', 'devops', 'test', 'plans'] },
    { id: 144, title: 'AWS Testing Tools', category: 'testing', url: 'qa.html#cloud-testing', description: 'AWS Device Farm, X-Ray distributed tracing, CloudWatch, and Step Functions workflow testing', keywords: ['aws', 'device', 'farm', 'x-ray', 'cloudwatch', 'step', 'functions', 'testing', 'mobile'] },
    { id: 145, title: 'Azure Testing Services', category: 'testing', url: 'qa.html#cloud-testing', description: 'Azure DevOps Test Plans, App Center mobile testing, Azure Load Testing, and Security Center', keywords: ['azure', 'devops', 'test', 'plans', 'app', 'center', 'load', 'testing', 'security', 'center'] },
    { id: 146, title: 'Performance Testing', category: 'testing', url: 'qa.html#cloud-testing', description: 'Load testing with k6, JMeter, Gatling, Locust and chaos engineering for resilience', keywords: ['performance', 'testing', 'load', 'k6', 'jmeter', 'gatling', 'locust', 'chaos', 'engineering'] },
    { id: 147, title: 'Chaos Engineering', category: 'testing', url: 'qa.html#cloud-testing', description: 'Gremlin and Chaos Monkey for resilience testing of cloud systems', keywords: ['chaos', 'engineering', 'gremlin', 'chaos', 'monkey', 'resilience', 'failure', 'testing'] },

    // QA: Monitoring
    { id: 148, title: 'Monitoring & Observability (QA)', category: 'monitoring', url: 'qa.html#monitoring', description: 'Grafana dashboards, key test metrics, and alerting strategies for QA', keywords: ['monitoring', 'observability', 'grafana', 'dashboards', 'metrics', 'alerts', 'qa', 'test'] },
    { id: 149, title: 'Grafana Dashboards', category: 'monitoring', url: 'qa.html#monitoring', description: 'Build QA test metrics dashboards - test pass rate, execution time, and defect density', keywords: ['grafana', 'dashboards', 'metrics', 'test', 'pass', 'rate', 'panels'] },
    { id: 150, title: 'Alerting Strategies', category: 'monitoring', url: 'qa.html#monitoring', description: 'Real-time alerts, performance thresholds, and trend analysis for test quality', keywords: ['alerting', 'alerts', 'thresholds', 'trend', 'analysis', 'slack', 'teams', 'monitoring'] },

    // QA: Additional Tools
    { id: 151, title: 'Cypress', category: 'testing', url: 'qa.html#additional-tools', description: 'JavaScript E2E testing framework with excellent debugging', keywords: ['cypress', 'e2e', 'end-to-end', 'javascript', 'testing', 'debugging'] },
    { id: 152, title: 'Robot Framework', category: 'testing', url: 'qa.html#additional-tools', description: 'Keyword-driven testing for acceptance testing', keywords: ['robot', 'framework', 'keyword-driven', 'acceptance', 'testing', 'automation'] },
    { id: 153, title: 'Appium', category: 'testing', url: 'qa.html#additional-tools', description: 'Mobile app automation testing across iOS and Android', keywords: ['appium', 'mobile', 'automation', 'testing', 'ios', 'android'] },
    { id: 154, title: 'JMeter', category: 'testing', url: 'qa.html#additional-tools', description: 'Load and performance testing tool', keywords: ['jmeter', 'load', 'performance', 'testing', 'apache'] },

    // About: Experience
    { id: 155, title: 'About Josh Sylvia', category: 'page', url: 'about.html', description: 'Senior Software Engineer specializing in cybersecurity, cloud architecture, mobile development, and enterprise software', keywords: ['about', 'josh', 'sylvia', 'senior', 'software', 'engineer', 'cybersecurity', 'cloud'] },
    { id: 156, title: 'NSA Experience', category: 'experience', url: 'about.html', description: 'Senior Software Engineer at National Security Agency developing classified cybersecurity solutions and intelligence systems', keywords: ['nsa', 'national', 'security', 'agency', 'experience', 'intelligence', 'classified', 'cybersecurity'] },
    { id: 157, title: 'NASA Experience', category: 'experience', url: 'about.html', description: 'Lead Developer at NASA for mission-critical space exploration software and satellite communication systems', keywords: ['nasa', 'space', 'exploration', 'satellite', 'communication', 'experience', 'lead', 'developer'] },
    { id: 158, title: 'Barracuda Networks Experience', category: 'experience', url: 'about.html', description: 'Principal Engineer at Barracuda Networks developing enterprise security appliances and cloud-based threat protection', keywords: ['barracuda', 'networks', 'principal', 'engineer', 'security', 'appliances', 'threat', 'protection'] },
    { id: 159, title: 'Technical Expertise', category: 'skill', url: 'about.html', description: 'Cybersecurity engineering, cloud & DevOps with DevSecOps, and full-stack development expertise', keywords: ['expertise', 'cybersecurity', 'engineering', 'cloud', 'devops', 'devsecops', 'full-stack', 'penetration', 'testing'] },

    // About: Skills
    { id: 160, title: 'Programming Languages', category: 'skill', url: 'about.html', description: 'Angular, React, C, C++, C#, Java, Kotlin, Objective-C, Perl, Python, Go, HTML, CSS, Shell, JavaScript, Swift', keywords: ['angular', 'react', 'c', 'c++', 'c#', 'java', 'kotlin', 'objective-c', 'perl', 'python', 'go', 'html', 'css', 'shell', 'javascript', 'swift', 'programming', 'languages', 'frameworks'] },
    { id: 161, title: 'Operating Systems', category: 'skill', url: 'about.html', description: 'Linux (RedHat/Debian), Unix, Mac, Android, iOS, Windows Server', keywords: ['linux', 'redhat', 'debian', 'unix', 'mac', 'android', 'ios', 'windows', 'server', 'operating', 'systems', 'os'] },
    { id: 162, title: 'Databases', category: 'skill', url: 'about.html', description: 'SQL, MySQL, PostgreSQL, MongoDB, Elasticsearch', keywords: ['sql', 'mysql', 'postgresql', 'mongodb', 'elasticsearch', 'database', 'nosql', 'data', 'storage'] },
    { id: 163, title: 'Cloud & DevOps Skills', category: 'skill', url: 'about.html', description: 'AWS, Azure, Google Cloud, EC2, S3, NiFi, Kafka, Terraform, VPNs, Docker, Kubernetes, Microservices, Git, CI/CD, DevSecOps', keywords: ['aws', 'azure', 'google', 'cloud', 'ec2', 's3', 'nifi', 'kafka', 'terraform', 'vpn', 'docker', 'kubernetes', 'microservices', 'git', 'cicd', 'devsecops', 'devops', 'infrastructure', 'automation'] },
    { id: 164, title: 'Computer Networking', category: 'skill', url: 'about.html', description: 'OSI Model, OSPF, IGRP, EIGRP, BGP, VLAN, VRRP, InterVLAN Routing, STP, IPsec Tunneling, Load Balancers, Wireshark', keywords: ['osi', 'model', 'network', 'security', 'communication', 'ospf', 'igrp', 'eigrp', 'bgp', 'vlan', 'vrrp', 'intervlan', 'routing', 'stp', 'ipsec', 'tunneling', 'load', 'balancers', 'wireshark', 'networking', 'protocols'] },
    { id: 165, title: 'Testing Skills', category: 'skill', url: 'about.html', description: 'UI Testing, API Testing, White Box, Black Box, Unit, Test Automation, SAST, DAST, UAT, Integration, Regression, Ansible', keywords: ['ui', 'testing', 'api', 'testing', 'white', 'box', 'black', 'box', 'unit', 'testing', 'test', 'automation', 'sast', 'dast', 'uat', 'user', 'acceptance', 'integration', 'regression', 'ansible', 'qa', 'quality', 'assurance'] },
    { id: 166, title: 'Software Development Lifecycle', category: 'skill', url: 'about.html', description: 'SDLC, Scrum, Agile, JIRA, Confluence', keywords: ['sdlc', 'scrum', 'agile', 'jira', 'confluence', 'development', 'lifecycle', 'project', 'management', 'methodology'] },
    { id: 167, title: 'Development Tools', category: 'skill', url: 'about.html', description: 'IntelliJ, PyCharm, StarUML, AutoCAD, PSpice, Xcode, Android Studio, Eclipse, NetBeans, Splunk, SwiftUI, Visio, Jupyter Notebook, MS Office', keywords: ['intellij', 'pycharm', 'staruml', 'autocad', 'pspice', 'xcode', 'android', 'studio', 'eclipse', 'netbeans', 'splunk', 'swiftui', 'visio', 'jupyter', 'notebook', 'ms', 'office', 'development', 'tools', 'ide'] },
    { id: 168, title: 'Cloud Architecture Models', category: 'skill', url: 'about.html', description: 'IaaS, PaaS, DaaS, SaaS, FaaS, VPC, SASE', keywords: ['iaas', 'paas', 'daas', 'saas', 'faas', 'vpc', 'sase', 'cloud', 'architecture', 'models', 'infrastructure', 'platform', 'service'] },
    { id: 169, title: 'Security and Security Controls', category: 'skill', url: 'about.html', description: 'RBAC, DAC, Threat Modeling, Cyber Threat Intelligence, API Security, Security as Code, SOC, SOC2, FedRAMP, RMF, Incident Response, IAM, Risk Management, PII, PHI, EDR, DLP, MDR, HIPAA, GDPR, CCPA, SIEM, SOAR', keywords: ['rbac', 'dac', 'gap', 'analysis', 'cves', 'threat', 'modeling', 'cyber', 'threat', 'intelligence', 'metrics', 'kpis', 'log', 'data', 'analysis', 'api', 'security', 'as', 'code', 'cloud', 'security', 'testing', 'soc', 'soc2', 'fedramp', 'web', 'application', 'security', 'rmf', 'process', 'incident', 'response', 'iam', 'risk', 'management', 'pii', 'phi', 'edr', 'dlp', 'mdr', 'change', 'management', 'configuration', 'management', 'hipaa', 'gdpr', 'ccpa', 'sla', 'root', 'cause', 'analysis', 'siem', 'soar', 'cybersecurity', 'controls', 'compliance'] },
    { id: 170, title: 'Generative AI Skills', category: 'skill', url: 'about.html', description: 'Windsurf, Claude, Copilot, ChatGPT, Gemini', keywords: ['windsurf', 'claude', 'copilot', 'chatgpt', 'gemini', 'generative', 'ai', 'artificial', 'intelligence', 'llm', 'language', 'model'] },

    // About: Education
    { id: 171, title: 'San Jose State University (SJSU)', category: 'education', url: 'about.html', description: 'Bachelor of Science in Computer Science - software engineering, cybersecurity, testing, and mobile development', keywords: ['sjsu', 'san', 'jose', 'state', 'university', 'computer', 'science', 'bachelor', 'degree'] },
    { id: 172, title: 'Cabrillo College', category: 'education', url: 'about.html', description: 'Associate of Science in Computer Science - Linux Systems Administration with High Honors, Student Senate Treasurer, Engineering Abroad Guatemala', keywords: ['cabrillo', 'college', 'computer', 'science', 'associate', 'linux', 'administration', 'high', 'honors', 'guatemala'] },

    // Index: Story & Success
    { id: 173, title: 'My Story', category: 'page', url: 'index.html#story-section', description: 'Raised in Silicon Valley - resilience, innovation, and community guiding technology problem-solving', keywords: ['story', 'silicon', 'valley', 'community', 'innovation', 'resilience', 'background'] },
    { id: 174, title: 'Engineering Abroad Guatemala', category: 'story', url: 'index.html#story-section', description: 'Leading an engineering project that brought potable water to a remote village outside Antigua, Guatemala', keywords: ['guatemala', 'antigua', 'engineering', 'abroad', 'water', 'village', 'humanitarian', 'video'] },
    { id: 175, title: 'Technical Success Story (Server Migration)', category: 'story', url: 'index.html#success-story', description: 'Time-critical migration of 4 active servers - resolved ATO compliance, retired EOL Python 2/CentOS, patched log4j, used Apache NiFi, completed 2 days ahead', keywords: ['migration', 'server', 'ato', 'compliance', 'python', '2', 'centos', 'log4j', 'ubuntu', 'nifi', 'deadline'] },
    { id: 176, title: 'Meet Nanook', category: 'story', url: 'index.html', description: 'Siberian Husky companion and coding buddy who inspires curiosity and adventure', keywords: ['nanook', 'husky', 'siberian', 'dog', 'pet', 'coding', 'buddy', 'alaska'] },
    { id: 177, title: 'What I Do', category: 'page', url: 'index.html', description: 'Software development, cybersecurity, and cloud architecture services', keywords: ['what', 'i', 'do', 'software', 'development', 'cybersecurity', 'cloud', 'architecture', 'services'] },

    // Videos / Tutorials
    { id: 178, title: 'CISSP Certification Complete Course', category: 'video', url: 'tutorials.html', description: 'Complete CISSP certification training course video', keywords: ['cissp', 'certification', 'course', 'video', 'tutorial', 'cybersecurity', 'training'] },
    { id: 179, title: 'Complete Cybersecurity Course for Beginners', category: 'video', url: 'tutorials.html', description: 'Introduction to cybersecurity fundamentals for beginners', keywords: ['cybersecurity', 'beginners', 'course', 'video', 'fundamentals', 'tutorial'] },
    { id: 180, title: 'Python for Cybersecurity', category: 'video', url: 'tutorials.html', description: 'Python programming for security professionals', keywords: ['python', 'cybersecurity', 'programming', 'video', 'security', 'tutorial'] },
    { id: 181, title: 'JavaScript Tutorial', category: 'video', url: 'tutorials.html', description: 'Complete JavaScript programming guide covering ES6+ features', keywords: ['javascript', 'tutorial', 'video', 'programming', 'es6', 'web', 'development'] },

    // Projects and Tools
    { id: 182, title: 'Metasploit Framework', category: 'project', url: 'tutorials.html', description: 'Penetration testing framework for security professionals', keywords: ['metasploit', 'penetration', 'testing', 'security', 'framework', 'cybersecurity'] },
    { id: 183, title: 'OSQuery Monitoring', category: 'project', url: 'tutorials.html', description: 'SQL-powered operating system instrumentation and monitoring', keywords: ['osquery', 'monitoring', 'security', 'siem', 'instrumentation', 'sql'] },
    { id: 184, title: 'Kubernetes Orchestration', category: 'project', url: 'tutorials.html', description: 'Container orchestration and microservices management', keywords: ['kubernetes', 'containers', 'orchestration', 'microservices', 'docker'] },
    { id: 185, title: 'Terraform Infrastructure', category: 'project', url: 'tutorials.html', description: 'Infrastructure as code with Terraform and AWS provider', keywords: ['terraform', 'infrastructure', 'code', 'iac', 'aws', 'automation'] },

    // Security Topics
    { id: 186, title: 'DEFCON Conference', category: 'security', url: 'index.html', description: 'Regular attendee at DEFCON security conference', keywords: ['defcon', 'conference', 'security', 'hacking', 'cybersecurity', 'networking'] },
    { id: 187, title: 'Security Tools', category: 'security', url: 'tutorials.html', description: 'Collection of security tools and resources for developers', keywords: ['security', 'tools', 'devsecops', 'penetration', 'testing', 'vulnerability'] },
    { id: 188, title: 'Network Security', category: 'security', url: 'about.html', description: 'Network security implementation and best practices', keywords: ['network', 'security', 'firewall', 'vpn', 'encryption', 'protocols'] },

    // Development Topics
    { id: 189, title: 'Full Stack Development', category: 'development', url: 'about.html', description: 'End-to-end web application development', keywords: ['fullstack', 'full', 'stack', 'development', 'frontend', 'backend'] },
    { id: 190, title: 'API Development', category: 'development', url: 'apis.html', description: 'RESTful API design and implementation', keywords: ['api', 'development', 'rest', 'endpoint', 'microservices'] },
    { id: 191, title: 'Performance Optimization', category: 'development', url: 'tutorials.html', description: 'Application performance tuning and optimization', keywords: ['performance', 'optimization', 'tuning', 'caching', 'database'] },
    { id: 192, title: 'DevSecOps Practices', category: 'development', url: 'about.html', description: 'Security-integrated DevOps practices with automated security scanning, compliance automation, and shift-left security', keywords: ['devsecops', 'devops', 'security', 'automation', 'cicd', 'compliance', 'shift-left', 'security-as-code'] },
    { id: 193, title: 'Node.js Development', category: 'technology', url: 'apis.html', description: 'Server-side JavaScript development with Express.js', keywords: ['nodejs', 'javascript', 'express', 'server', 'backend', 'development'] },
    { id: 194, title: 'React Frontend', category: 'technology', url: 'about.html', description: 'Modern React applications with hooks and components', keywords: ['react', 'frontend', 'javascript', 'components', 'hooks', 'ui'] },
    { id: 195, title: 'Cloud Architecture', category: 'technology', url: 'index.html', description: 'AWS, Azure, and Google Cloud platform expertise', keywords: ['cloud', 'aws', 'azure', 'gcp', 'architecture', 'infrastructure', 'devops', 'devsecops'] },
    { id: 196, title: 'Database Design', category: 'technology', url: 'apis.html', description: 'PostgreSQL, MongoDB, and database optimization', keywords: ['database', 'postgresql', 'mongodb', 'sql', 'nosql', 'optimization'] }
];

// Search functionality
let autocompleteTimeout;
let currentResults = [];
let selectedIndex = -1;

// Local search function
function searchLocalIndex(searchTerm) {
    const term = searchTerm.toLowerCase();
    return searchIndex.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(term);
        const descriptionMatch = item.description.toLowerCase().includes(term);
        const keywordsMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(term));
        return titleMatch || descriptionMatch || keywordsMatch;
    }).map(item => ({
        ...item,
        relevanceScore: calculateRelevanceScore(item, term)
    })).sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function calculateRelevanceScore(item, searchTerm) {
    const term = searchTerm.toLowerCase();
    let score = 0;
    
    // Title match has highest weight
    if (item.title.toLowerCase().includes(term)) {
        score += 10;
    }
    
    // Keywords match has medium weight
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(term))) {
        score += 5;
    }
    
    // Description match has lower weight
    if (item.description.toLowerCase().includes(term)) {
        score += 2;
    }
    
    return score;
}

// Make functions globally available
window.handleSearchKeydown = function(event) {
    console.log('DEBUG: handleSearchKeydown called', event.key, event.target.value);
    const dropdown = document.getElementById('autocomplete-dropdown');
    const items = dropdown.querySelectorAll('.autocomplete-item');
    
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelectedIndex(items);
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelectedIndex(items);
    } else if (event.key === 'Enter') {
        if (selectedIndex >= 0 && items[selectedIndex]) {
            event.preventDefault();
            items[selectedIndex].click();
        } else {
            // If no item selected, search and navigate to first result
            event.preventDefault();
            const searchInput = document.getElementById('search-input');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                const results = searchLocalIndex(searchTerm);
                if (results.length > 0) {
                    window.location.href = results[0].url;
                }
            }
            closeAutocomplete();
        }
    } else if (event.key === 'Escape') {
        console.log('DEBUG: Escape key pressed, closing autocomplete');
        closeAutocomplete();
    }
};

function updateSelectedIndex(items) {
    items.forEach((item, index) => {
        if (index === selectedIndex) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('selected');
        }
    });
}

window.handleAutocomplete = function(event) {
    console.log('DEBUG: handleAutocomplete called', event.target.value);
    const searchTerm = event.target.value.trim();
    
    clearTimeout(autocompleteTimeout);
    
    if (searchTerm.length < 2) {
        console.log('DEBUG: Search term too short, closing autocomplete');
        closeAutocomplete();
        return;
    }
    
    autocompleteTimeout = setTimeout(() => {
        console.log('DEBUG: Searching local index for:', searchTerm);
        const results = searchLocalIndex(searchTerm);
        console.log('DEBUG: Found', results.length, 'results from local search');
        displayAutocomplete(results, searchTerm);
    }, 300);
};

window.displayAutocomplete = function(results, searchTerm) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    
    if (results.length === 0) {
        closeAutocomplete();
        return;
    }
    
    const limitedResults = results.slice(0, 8);
    
    const html = limitedResults.map(item => {
        const highlightedTitle = highlightText(item.title, searchTerm);
        const highlightedDescription = highlightText(item.description, searchTerm);
        
        return `
            <div class="autocomplete-item" onclick="selectAutocompleteItem('${item.title}', '${item.url}')">
                <div class="title">${highlightedTitle}</div>
                <div class="category">${item.category}</div>
                <div class="description">${highlightedDescription}</div>
            </div>
        `;
    }).join('');
    
    dropdown.innerHTML = html;
    dropdown.classList.add('show');
    currentResults = results;
};

window.highlightText = function(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
};

window.selectAutocompleteItem = function(title, url) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = title;
    closeAutocomplete();
    // Navigate to the URL
    if (url) {
        window.location.href = url;
    }
};

window.closeAutocomplete = function() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
};

window.performSearch = function() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        return;
    }
    
    const results = searchLocalIndex(searchTerm);
    displaySearchResults(results, searchTerm);
    closeAutocomplete();
};

window.displaySearchResults = function(results, searchTerm) {
    let modal = document.getElementById('search-results-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'search-results-modal';
        modal.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 700px;
            max-height: 500px;
            overflow-y: auto;
            z-index: 10000;
            padding: 20px;
        `;
        document.body.appendChild(modal);
    }
    
    if (results.length === 0) {
        modal.innerHTML = `
            <h3>No results found for "${searchTerm}"</h3>
            <p>Try searching for different keywords like: Prompt Injection, RAG, MCP, Agentic AI, CISSP, GraphQL, Selenium, FedRAMP, Incident Response</p>
            <button onclick="closeSearchResults()" style="margin-top: 10px; padding: 8px 16px; background: #6B46C1; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
        `;
    } else {
        const resultsHtml = results.map(result => `
            <div style="margin-bottom: 15px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; cursor: pointer;" onclick="window.location.href='${result.url}'">
                <h4 style="color: #6B46C1; margin: 0 0 8px 0;">${result.title}</h4>
                <div style="font-size: 12px; color: #666; margin-bottom: 8px;">
                    <span style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px; margin-right: 8px;">Score: ${result.relevanceScore ? result.relevanceScore.toFixed(2) : 'N/A'}</span>
                    <span style="background: #e0e0e0; padding: 2px 6px; border-radius: 3px; margin-right: 4px;">${result.category}</span>
                    ${result.keywords ? result.keywords.map(k => `<span style="background: #e0e0e0; padding: 2px 6px; border-radius: 3px; margin-right: 4px;">${k}</span>`).join('') : ''}
                </div>
                <p style="color: #666; font-size: 14px; margin: 0;">${result.description}</p>
            </div>
        `).join('');
        
        modal.innerHTML = `
            <h3>Search Results for "${searchTerm}" (${results.length} found)</h3>
            ${resultsHtml}
            <button onclick="closeSearchResults()" style="margin-top: 15px; padding: 8px 16px; background: #6B46C1; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
        `;
    }
    
    setTimeout(() => {
        document.addEventListener('click', function closeSearchModal(e) {
            if (!modal.contains(e.target) && e.target.id !== 'search-input') {
                closeSearchResults();
                document.removeEventListener('click', closeSearchModal);
            }
        });
    }, 100);
};

window.closeSearchResults = function() {
    const modal = document.getElementById('search-results-modal');
    if (modal) {
        modal.remove();
    }
};

// Close autocomplete when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(event.target)) {
        closeAutocomplete();
    }
});

// Initialize search input debugging
document.addEventListener('DOMContentLoaded', function() {
    console.log('DEBUG: DOM loaded, search functions available');
});
