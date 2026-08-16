# Pet Adoption - Pet Module

## Entity

The selected entity is **Pet** because pets are the main entities in the Pet Adoption Platform. The platform allows shelters and pet rescuers to add, update, delete, and manage pets available for adoption.

## Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose

## Routes

### 1. Create a Pet

**POST `/pets`**

Creates a new pet in the database.

### 2. Get All Pets

**GET `/pets`**

Returns all pets stored in the database.

### 3. Get Pet by ID

**GET `/pets/:id`**

Returns a specific pet using its ID.

### 4. Update a Pet

**PATCH `/pets/:id`**

Updates the information of an existing pet.

### 5. Delete a Pet

**DELETE `/pets/:id`**

Deletes a specific pet from the database.

## Pet Fields

The Pet model contains:

* `name`
* `type`
* `breed`
* `age`
* `gender`
* `description`

## How to Run Locally

1. Install the project dependencies:

```bash
npm install
```

2. Create a `.env` file and add the MongoDB connection string:

```text
MONGO_URI=your_mongodb_connection_string
```

3. Start the server:

```bash
node server.js
```

4. The server runs on:

```text
http://localhost:5000
```

## Testing

All CRUD routes were tested using Postman.
