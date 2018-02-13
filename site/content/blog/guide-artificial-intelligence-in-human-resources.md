---
date: 2018-01-19T22:01:22-07:00
title: "A Guide to AI in HR"
slug: "guide-artificial-intelligence-human-resources"
tags: ["artificial intelligence"]
---

# A guide to understanding Artificial Intelligence in human resources.
With a veritable explosion of investment, 2018 is clearly the year of artificial intelligence hype, and while human resources (HR) remains at the fringe of discussion, it is poised for disruption.

> But what does artificial intelligence really mean?  How close are we to achieving “meaningful use” - to steal a term from healthcare? Should you as a recruiter or HR Director care? Is your job or role at risk?

Without doubt, the questions outweigh the answers. While we won’t address all of those questions here, we do want to introduce several key concepts that underlie AI - and for professionals familiar with statistical analysis and probability, this will likely be an approach that makes more sense than the puffery that abounds.

![Image of AI in HR] (https://res.cloudinary.com/victorydev/image/upload/v1518442988/HR-Recruitment_tq1nzf.jpg?raw=true)


At the heart of an AI application lies the Neural Network, or in its simplest form the Artificial Neural Network (ANN). You will also encounter the Convolutional Neural Network (CNN) and finally Recurrent Neural Networks (RNN).
These neural networks attempt to model the human brain - or how the brain processes information, and each has its specific use case.  Understanding the differences between ANN-CNN-RNN will help you identify both the scale and scope of a given task you are attempting, and help you avoid unnecessary costs when working with organizations offering AI solutions.

In brief, each type of neural net is aligned with a complex use case like classification, clustering and prediction. For example, image recognition and face recognition use CNN while Natural Language Processing (NLP) relies on RNN. ANN, the simpler ones of all the neural networks is often used for predictions involving numerical data.

An organization attempting to develop a chatbot interface might utilize RNN. An organization looking to add facial recognition to the patient intake process would rely on CNN, and a practice interested in predicting the probability of patient compliance would develop ANN models.

Most often, Artificial Intelligence is assumed to have predictive abilities combined with sight and speech processing .. in this use case all three deep learning models must be combined in a highly complex system … which very few AI applications do successfully at this point.

## Going a little deeper down the rabbit hole.
For most immediate applications, the ANN is most appropriate … as prediction is generally the most valuable aid in a business setting. Prediction, however, doesn’t require artificial intelligence. In fact, the output of an ANN may be frustrating for HR as the weights within the hidden layers are just that … hidden.  With a general computer algorithm, a data scientist will set weights … generally based on previous studies or observations … and those weights will be visible and apparent.  The ANN generally works across so a large network of vectors that visualizing every weight is not only impractical … it is impossible. 

> AI is a “black box” that is often impenetrable … even though it is mathematical.

A CNN on the other hand will learn to recognize patterns across space. This is particularly useful in visually-oriented applications such as recognizing a photo ID, or being able to connect a video stream of a person’s face to a stored photo ID. A CNN will learn to recognize components of an image (e.g., lines, curves, etc.) and then learn to combine these components to recognize larger structures (e.g., faces, objects, etc.).

Finally, the RNN will similarly learn to recognize patterns, but will do so across time. So a RNN that is trained to translate text might learn that "dog" should be translated differently if preceded by the word "hot".

The mechanism by which the three kinds of NNs represent these patterns is different. In the case of a CNN, you are looking for the same patterns on all the different subfields of the image. In the case of a RNN you are (in the simplest case) feeding the hidden layers from the previous step as an additional input into the next step. While the RNN builds up memory in this process, it is not looking for the same patterns over different slices of time in the same way that a CNN is looking for the same patterns over different regions of space.

You could run a RNN on a single image for image captioning, for instance, and the meaning of "time" would simply be the order in which different parts of the image are processed. So objects initially processed will inform the captioning of later objects processed.

Here's a sample diagram of what's going on inside a type of RNN:
![Image of an LSTM] (https://res.cloudinary.com/victorydev/image/upload/v1518443787/LSTM-RNN_e2bipi.jpg?raw=true)

## So how should HR approach AI to solve a particular problem?

It should first be noted that the expansion, affordability and availability of AI tools is such now that even individual departments can easily afford to develop specific implementations.

As a data scientist, before approaching an algorithm the first thing we should always ask is what kind of dataset we have. If the problem is Classification ( e.g. predicting the likelihood of the group of skills in a resume being a fit for a job opening) the kind of algorithms you would use, would be defined by the kind of dataset you have and the state of that data.

The next thing you should look at is the business objective of the problem. An objective to understand the “reasons” for a particular problem - like the risk factors causing someone to leave the company - makes it an Inference Problem.
In the Inference problem the objective is more to understand the relationship between features and the response/dependent variables. In that case one would prefer linear or less complex models since they are interpretable. 

A business objective to focus more on accuracy and a correct prediction score rather than understanding the data, is a Prediction Problem. You then have the luxury to choose algorithms that focus on prediction accuracy. Usually, complex or “black box” models like the ANN will work well for a Prediction Problem. But is is crucial to understand that Interpretability is very low for such models as the focus is on getting an accurate prediction rather than an inference or understanding of the relationships within the data.

## Limitations of any given model

There is no universal algorithm that works best on all kinds of dataset problems. Because of this, any implementation may need to try multiple algorithms to find which one works well on the specific dataset in question. Because of this, may organizations will simply adopt the largest AI solution that can be easily afforded. The danger in this approach is trusting that the model itself was correctly designed.  Without sufficient design, no AI will be useful.
Normally it's a good approach to start with simple algorithms ( like logistic regression or other simple linear counterparts) and build on the complexity as you progress. 

In the end, if you are seeking highly accurate prediction without needing to have an explanation, the ANN is ideal. CNN & RNN are deep learning approaches which are best used on text, speech and image data. All Neural Networks are “non-interpretable” models requiring immense computing resources and work best with lots of data to train the weights in the model. Using AI is ideal for a computer vision or NLP task requiring great accuracy, but it is not best for an everyday data science task.

## Takeaways for HR

So what does this mean for HR? There are a number of use cases for the implementation of AI in HR. With existing restraints to selection tools, some immediate applications include:

* Turnover Prediction
* Fit Prediction
* Performance Analysis
* Pay Negotiation or Modeling
* Recruiting Messaging Personalization
* Programmatic Recruiting
