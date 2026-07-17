<div align="center">
  <img src="assets/readme/hero.svg" alt="MythosIDE: World Development Environment" width="100%" />
</div>

**MythosIDE** is an open-source desktop application that functions as a World Development Environment (WDE) for novelists. 

While most writing apps focus on the manuscript, MythosIDE understands that for fantasy, sci-fi, and epic fiction writers, the **world** is the source of truth. It treats worldbuilding with the same structural rigor that an IDE treats source code.

## The Mechanism

Unlike generic note-taking tools or Wikis, MythosIDE connects your manuscript directly to a structured world database. When you reference a character, location, or faction, the IDE knows its current state, relationships, and history. 

- **Typed Entities**: Characters aren't just text notes; they are nodes with properties (Status, Faction, Location).
- **Timeline Integrity**: The environment warns you if a character is referenced in a scene after their death, or if they are in two locations at once.
- **Distraction-Free**: Built with a calm, dark-themed, and technical aesthetic. No clutter, no distracting AI chat bubbles—just your world and your words.

## Development Setup

MythosIDE is built with React, TypeScript, Vite, and Tailwind CSS v4.

```bash
# Clone the repository
git clone https://github.com/your-username/mythoside.git
cd mythoside/mythoside-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Philosophy

- **This tool understands how you write:** It gets out of the way when drafting and provides structural support when planning.
- **No AI generation focus:** This is a tool for *writers* to write, not for AI to write for you.
- **Local and Private:** Your world belongs to you.

## Contributing

We welcome contributions from developers and writers alike. Whether it's adding new features to the editor, improving the data structure of world nodes, or fixing bugs.

## License

MIT License
