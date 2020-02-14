# Project plan for Jobble

## Overview

Jobble is a job seeker app which allows job seekers to download and curate their own personal lists of jobs they are interested in applying for. It is "Tinder for Jobs".

In our initial MVP, we will pull jobs from LinkedIn using the LinkedIn API. (We will also require users to create an account in Jobble in order to use it, and have authentication for this.) We will also have our own Jobble API which will allow the app to stored and retrieve saved jobs in MongoDB.

## Models

There are two main schemas going into this application.

#### User

```JS
{
  userId: String,
  name: String,
  unsavedJobs: [{job}, {job}, {job}], // List of jobs from search
  savedJobs: [{job}, {job}, {job}], // Jobs to be saved to user's database
  discardedJobs: [jobId, jobId, jobId], // IDs of jobs to be filtered out of future searches
}
```

#### Job

```JS
{
  jobId: String,
  description: String,
  location: {
    name: String,
    country: {
      code: String
    }
  },
  jobPoster: {
    firstName: String,
    lastName: String
  }
}
```

## Team

- Ghazal Mansour
- Jordan Taylor (Git Manager)
- Michelene Chon (Scrum Master)
- Qusai Fares
