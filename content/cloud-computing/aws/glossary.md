---
id: aws-glossary
title: AWS Glossary
sidebar_label: Glossary
---

## Glossary

### Global Infrastructure

* **Region**: has 2 or more AZs
* **Availability Zones**: Multiple data centers in the same region to provide agility
* **Edge Locations**: These are Amazons CDNs for faster content delivery via nearest location

### VPC: Virtual Private Cloud

* You can create personal VPCs per region & do networking via subnets & security groups

### Security Group

* It is group of inbound and outbound rules that we can assign to VPCs that enable or disable access to certain traffic via ports.
* You should only allow traffic that your application needs and disallow all others

### Compute Services

* **EC2**: Stands for **Elastic Cloud Compute**. It is used for flexible computing, supports scaling up and down. Complete control. If properly configured we can easily increase and decrease the instances as and when required
  * **AMI**: Stands for Amazon Machine Image, used as software platform for instance, what operating system do you wanna use with this instance.
* **Lambda**: Serverless service where you can run code without maintaining servers, they are kinda like firebase cloud functions
* **Lightsail**: Virtual private server, it has everything compute, SSD, networking, kinda like Digital Ocean Droplets
* **ECS**: For docker containers & Kubernetes
