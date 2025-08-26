import React from 'react';
import { FeatureSteps } from './ui/feature-section';

const features = [
  { 
    step: 'Step 1', 
    title: 'Choose Your Goal',
    content: 'Start by defining the purpose of your landing page, whether it\'s lead generation, sales, or event promotion.',
    image: 'https://i.imgur.com/t1Sln44.png'
  },
  { 
    step: 'Step 2',
    title: 'Generate with AI',
    content: 'Our AI crafts compelling copy, selects stunning visuals, and designs a layout optimized for conversion.',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2832&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Launch & Convert',
    content: 'Publish your high-converting page with a single click and start seeing results in minutes.',
    image: 'https://i.imgur.com/rV4VKxx.jpeg'
  },
];

const Features: React.FC = () => {
    return (
        <div id="features">
            <FeatureSteps 
                features={features}
                title="How It Works"
                autoPlayInterval={4000}
            />
        </div>
    );
}

export default Features;