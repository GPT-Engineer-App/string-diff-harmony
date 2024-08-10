import StringDiffViewer from '../components/StringDiffViewer';

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">String Difference Viewer</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Paste two strings below to see the differences between them, including whitespace.
        </p>
        <StringDiffViewer />
      </div>
    </div>
  );
};

export default Index;
