---
date: 2017-09-28
title: Eliminating Bias and Google's Jobs API
slug: google-job-api-bias
tags: ["hiring selection"]
---
# Google just launched their Cloud Jobs API - but will it be biased against military job seekers?


> “At the heart of Cloud Jobs API, there are two main proprietary ontologies that encode knowledge about occupations and skills, as well as relational models between these ontologies… The occupational ontology, an enhanced evolution of O*NET Standard Occupational Classification…”

We’ve recently applied to take part in the beta release of the Google Cloud Jobs API and while we await response from google I read the line above with great interest and a little bit of trepidation. Why the hesitance you ask? Admittedly, I’m a fan of google cloud services and products - I’ve developed apps on top of firebase, Gunny Jobs is built on Google’s DialogFlow NLP interface, and most recently I’ve been building predictive AI models to help military transition to civilian jobs based with Google’s Tensorflow and Machine Learning engine.

I’m hesitant because I’ve worked with the O*Net model for years and believe very strongly that it is highly biased against military skills … and it does a very poor job of helping military translate their skills to civilian life and jobs.

That being said, I recognize that Google (according to their very limited public documentation) is primarily using O*Net as an occupation ontology (a set of categories), net necessarily as a skill ontology. The genesis of their skill ontology is more opaque, “The skill ontology defines and organizes around 50,000 hard and soft skills with different types of relationships such as is_a, related_to, etc.” In Google’s model, occupations are grouped by the similarity of their skill distributions. All of this makes perfect sense.  A person’s employability is shaped by their ability to perform specific skills at a specified level of competence.  For a more indepth diatribe on the topic, feel free to read one or several of my earlier essays on the topic. 

I freely embrace the concept of viewing a job applicant according to a set of competencies (skills proven at a specific level of ability) … comparing this set of competencies to that of a job listing and identifying fit. I’ve used the same type of approach to not only identify skill fit but also to identify gaps in skills for the purpose of creating on-demand skill training.

## So, if I agree with the approach … why the hesitance?

> I hesitate to fully embrace the Google Job model because if they are working from O*Net - O*Net uses a bridge to connect occupations in their ontology with Military Occupations in a separate database. Furthermore, the Department of Defense neither provides, nor categorizes military skills using the same skill database as the Department of Labor. 

Case in point - there is no standardization of skill training for the military medic across all branches of service. The National Council of State Boards of Nursing (NCSBN) recently revised their analysis of military medic to RN training equivalence and it doesn’t take you long to discover two obvious points: 1. There’s no easy way for a medic to translate their skills, and 2. There’s no way a single job description will ever list all the skill requirements that actually go into an occupation.  The O*Net skill translator … and for the most part every MOS to Civilian translator does a really poor job of translation, and in fact biases against military training … that is to say, if you review equivalence and job recommendation across military to civilian job recommendations you find that military occupations are ALWAYS correlated with more junior civilian occupations. Military transitioners are chronically underemployed upon exit … they are underemployed because the very fabric upon which civilian occupations rest is systematically biased against the skills they gained during their military service.

I had been hoping for better when Google announced their product in June … with this next phase and more information, I am no longer hopeful for the viability of Google’s platform or approach as an answer for military in transition. I will, however, keep you read in on what we discover if we are invited into the beta program … in which case we will be building in a better translational model.

Of course … skill set matching without testing and evidence … no matter how good the natural language processing is … how valuable is that really? 

## Are there alternatives?  I believe so.

If you recall, I recently announced the development of our Military job AI project titled “Gunny Jobs.” Part of this project combines with our veteran survey, that captures information about prior service, education level, demographics, location and job … and whether or not they like who they are working for and what they are doing.  There are adjustments to be made for sure, and we need more data as our model is still only inclusive of a 722 x 38 x 83 model (MOS, Major, Occupation). I believe that until such a time as an unbiased model is available, the best approach is to identify employers that do the best job in selection, hiring, promoting and engaging military veterans in jobs they can succeed in and enjoy. By identifying these critical pathways, we can provide useful guidance to transitioning military.

What do we need? More data =) If you are a veteran I encourage you to **#JointheRanks**  - we’ll be distributing survey links … if you’re currently employed, ask your HR officer to contact Redcell to request our proprietary Employee Survey - or for schools, our Student Survey. All the data from these surveys is being used to feed our AI model … to help build a job search tool that recognizes the real value of military service.
