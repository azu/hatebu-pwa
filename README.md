# hatebupwa [![Build Status](https://travis-ci.org/azu/hatebupwa.svg?branch=master)](https://travis-ci.org/azu/hatebupwa)

Hatena Bookmark search app.

## Feature

- Search your hatena bookmark
- Fetch difference bookmark automatically
- Support offline search
    - Safari 11.3+, Chrome, Firefox and MSEdge etc...
- Work as HomeScreen app

## Usage

Open <https://hatebupwa.netlify.com/>

## Architecture

### Routing

- `/`
    - Start
- `/home/`
    - `start_url` of HomeScreen app 
    - Redirect to last used session
- `/user/:name`
    - Set user to session
