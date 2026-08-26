# Task Master

A simple to-do list web app built with Flask and SQLAlchemy. Add tasks, mark them complete, edit, or delete them — all backed by a SQLite database.

**Live demo:** [add your live URL here]

## Features

- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Progress tracker showing completed vs. total tasks

## Tech Stack

- [Flask](https://flask.palletsprojects.com/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/)
- SQLite
- Gunicorn (production server)

## Getting Started

### Prerequisites

- Python 3.10+

### Installation

```bash
# Clone the repo
git clone https://github.com/Adeeb819/Todolist-App.git
cd Todolist-App

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### Running locally

```bash
python app.py
```

The app will be available at `http://localhost:5001`.

### Running in production

```bash
gunicorn app:app
```

## License

[MIT](LICENSE)
