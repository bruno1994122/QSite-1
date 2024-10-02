// index.js
class AlSite {
    constructor(username, baseUrl) {
        this.username = username;
        this.baseUrl = baseUrl;
    }

    getUserUrl() {
        return `${this.baseUrl}/folders/users/${this.username}`;
    }

    publishSite(subsite) {
        return `${this.baseUrl}/folders/sub?user="${this.username}",subsite="${subsite}"`;
    }
}

module.exports = AlSite;
