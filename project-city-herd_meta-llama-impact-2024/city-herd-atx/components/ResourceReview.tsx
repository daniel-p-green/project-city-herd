import { useState } from 'react';

interface Resource {
  url: string;
  title: string;
  snippet: string;
  category: string;
}

export default function ResourceReview({ resources, onValidate }) {
  const [selectedResources, setSelectedResources] = useState<Set<string>>(new Set());

  const toggleResource = (url: string) => {
    const newSelected = new Set(selectedResources);
    if (newSelected.has(url)) {
      newSelected.delete(url);
    } else {
      newSelected.add(url);
    }
    setSelectedResources(newSelected);
  };

  const handleSubmit = () => {
    const validatedResources = resources.filter(r => selectedResources.has(r.url));
    onValidate(validatedResources);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Review Resources</h2>
      {resources.map((resource) => (
        <div key={resource.url} className="p-4 border rounded-lg">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={selectedResources.has(resource.url)}
              onChange={() => toggleResource(resource.url)}
              className="mt-1"
            />
            <div>
              <h3 className="font-medium">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.snippet}</p>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded mt-2 inline-block">
                {resource.category}
              </span>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        Confirm Selected Resources
      </button>
    </div>
  );
} 