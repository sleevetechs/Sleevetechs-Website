# SleeveTechs Chatbot Data Store

This file contains all the information used by the SleeveTechs chatbot. You can update this data to modify what the chatbot knows and responds to.

## How to Update Data

### Adding New Services
To add a new service, add it to the `services` array in `websiteData.services`:

```typescript
{
  title: "New Service Name",
  shortDescription: "Brief description for service list",
  fullDescription: "Detailed description shown when selected",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  category: "category-name"
}
```

### Updating Contact Information
Update the `contact` object with your current contact details:

```typescript
contact: {
  email: "your-email@domain.com",
  phone: "+91 XXXXX XXXXX",
  location: "Your Location",
  availability: "Your availability description"
}
```

### Adding FAQ
Add frequently asked questions to the `faq` array:

```typescript
{
  question: "What is your question?",
  answer: "This is the answer to the question.",
  category: "general|services|contact|webdev|company"
}
```

### Updating Company Information
Modify the `company` object to update company details, values, and journey milestones.

## Search Functionality

The chatbot uses intelligent search to answer user questions. It searches through:
- FAQ database
- Services information
- Web development details
- Company information
- Contact details

Questions are matched based on keywords and the most relevant information is returned.

## Categories

- `general`: General company information
- `services`: Service-related questions
- `contact`: Contact and communication questions
- `webdev`: Web development specific questions
- `company`: Company background and values

## Best Practices

1. Keep answers concise but informative
2. Use the exact contact information from your website
3. Update service descriptions to match your current offerings
4. Add common customer questions to the FAQ section
5. Test the chatbot after making changes

## File Location
This data store is located at: `src/data/websiteData.ts`