import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

export { FontAwesomeIcon };

// {"info":
// {"_postman_id":"f019d4d6-ac1f-49ba-adad-d3924e2c3c97",
// "name":"neversitup-test-todo",
// "schema":"https://schema.getpostman.com/json/collection/v2.0.0/collection.json"},
// "item":[{"name":"register","_postman_id":"8896e4f3-b677-408f-a95f-21074c0a33b2",
// "request":{"method":"POST","header":[{"key":"Content-Type","name":"Content-Type",
// "value":"application/json","type":"text"}],
// "body":{"mode":"raw","raw":"{\n\t\"username\": \"test\",\n\t\"password\": \"12345\"\n}","options":{"raw":{"language":"json"}}},"url":"{{host}}/users/register"},

// "response":[]},{"name":"login","event":[{"listen":"test","script":{"type":"text/javascript","exec":["var jsonData = JSON.parse(responseBody);","postman.setEnvironmentVariable(\"token\", jsonData.token);"]}}],"_postman_id":"854b93bb-fbbf-48d3-a04c-d749d7a657cd",
// "request":{"method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n    \"username\": \"saintzst\",\n    \"password\": \"12345\"\n}","options":{"raw":{"language":"json"}}},"url":"{{host}}/users/auth"},
// "response":[]},{"name":"todos","_postman_id":"b2cfc4ea-d5f7-4066-8de3-ed9d62536270","request":{"auth":{"type":"bearer","bearer":{"token":"{{token}}"}},"method":"GET","header":[],"url":"{{host}}/todos"},
// "response":[]},{"name":"create-todos","_postman_id":"6dfa32ab-1abf-453e-b526-f7db7b8be123",
// "request":{"auth":{"type":"bearer","bearer":{"token":"{{token}}"}},

// "method":"POST","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n\t\"title\": \"My todo\",\n\t\"description\": \"I'm gonna create some todo list\"\n}","options":{"raw":{"language":"json"}}},"url":"{{host}}/todos"},
// "response":[]},{"name":"get by id","_postman_id":"1c0e21df-a73e-4cf7-a90e-d74f81fd543b","request":{"auth":{"type":"bearer","bearer":{"token":"{{token}}"}},"method":"GET","header":[],"url":"{{host}}/todos/5e31b790a22eb656e505218a"},"response":[]},{"name":"update todo","_postman_id":"46c89f2a-7c44-460c-8feb-56a4295d6205",
// "request":{"auth":{"type":"bearer","bearer":{"token":"{{token}}"}},"method":"PUT","header":[{"key":"Content-Type","name":"Content-Type","value":"application/json","type":"text"}],"body":{"mode":"raw","raw":"{\n    \"title\": \"New title\"\n}","options":{"raw":{"language":"json"}}},"url":"{{host}}/todos/5e2f1fb5cc08b8ab915ed677"},
// "response":[]},{"name":"delete todo","_postman_id":"2e441586-8f86-4ce5-9c88-8812b15329af","request":{"auth":{"type":"bearer","bearer":{"token":"{{token}}"}},
// "method":"DELETE","header":[],"url":"{{host}}/todos/5e2f1fb5cc08b8ab915ed676"},
// "response":[]}],"protocolProfileBehavior":[]}
