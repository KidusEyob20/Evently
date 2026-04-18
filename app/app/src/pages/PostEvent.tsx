import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { categories } from '@/data/events';
import FormInput from '@/components/form/FormInput';
import FormSelect from '@/components/form/FormSelect';
import FormTextarea from '@/components/form/FormTextarea';
import ImageUpload from '@/components/form/ImageUpload';
import { Calendar, ArrowLeft, CheckCircle } from 'lucide-react';

const PostEvent = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
    price: '',
    maxAttendees: '',
    deadline: '',
    teamSizeMin: '',
    teamSizeMax: '',
    image: null as File | null,
  });

  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      navigate('/organizer-dashboard');
    }, 2000);
  };

  const handleChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-navy-50 flex items-center justify-center pt-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-navy-900 mb-2">
            Event Created!
          </h2>
          <p className="text-navy-600 mb-6">
            Your event has been successfully posted and is now live.
          </p>
          <p className="text-sm text-navy-500">
            Redirecting to dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-navy-600 hover:text-navy-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy-900">Post an Event</h1>
              <p className="text-navy-600">
                Create and publish your event to reach thousands of students
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-navy-100">
            <CardHeader>
              <CardTitle className="text-navy-900">Event Details</CardTitle>
              <CardDescription className="text-navy-500">
                Fill in the information below to create your event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <ImageUpload
                  label="Event Cover Image"
                  onImageSelect={(file) => handleChange('image', file)}
                />

                {/* Title */}
                <FormInput
                  label="Event Title"
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  required
                />

                {/* Description */}
                <FormTextarea
                  label="Description"
                  placeholder="Describe your event..."
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  required
                  helperText="Minimum 50 characters recommended"
                />

                {/* Category & Date Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormSelect
                    label="Category"
                    placeholder="Select a category"
                    options={categoryOptions}
                    value={formData.category}
                    onChange={(value) => handleChange('category', value)}
                    required
                  />
                  <FormInput
                    label="Event Date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    required
                  />
                </div>

                {/* Time & Location Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    required
                  />
                  <FormInput
                    label="Location"
                    placeholder="Enter event location"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    required
                  />
                </div>

                {/* Registration Deadline */}
                <FormInput
                  label="Registration Deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleChange('deadline', e.target.value)}
                  helperText="Last date for participants to register"
                />

                {/* Price & Capacity Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Registration Fee (AED)"
                    type="number"
                    placeholder="0 for free events"
                    value={formData.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                    helperText="Leave empty or enter 0 for free events"
                  />
                  <FormInput
                    label="Maximum Participants"
                    type="number"
                    placeholder="Enter capacity"
                    value={formData.maxAttendees}
                    onChange={(e) => handleChange('maxAttendees', e.target.value)}
                    required
                  />
                </div>

                {/* Team Size */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Min Team Size"
                    type="number"
                    placeholder="1"
                    value={formData.teamSizeMin}
                    onChange={(e) => handleChange('teamSizeMin', e.target.value)}
                    helperText="Minimum members per team"
                  />
                  <FormInput
                    label="Max Team Size"
                    type="number"
                    placeholder="5"
                    value={formData.teamSizeMax}
                    onChange={(e) => handleChange('teamSizeMax', e.target.value)}
                    helperText="Maximum members per team"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-navy-100">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creating Event...' : 'Create Event'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="border-navy-200"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-teal-50 rounded-xl p-6 border border-teal-100"
        >
          <h3 className="font-semibold text-teal-900 mb-2">
            Tips for a successful event
          </h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li>• Use a high-quality cover image that represents your event</li>
            <li>• Write a clear and engaging description</li>
            <li>• Set a reasonable registration fee based on similar events</li>
            <li>• Choose the right category to help students find your event</li>
            <li>• Promote your event on social media after posting</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default PostEvent;
