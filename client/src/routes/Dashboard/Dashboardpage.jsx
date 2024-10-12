import { useMutation, useQueryClient } from '@tanstack/react-query';
import './dashboardpage.css';
import { useNavigate } from 'react-router-dom';

const Dashboardpage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutation to post the new chat
  const mutation = useMutation({
    mutationFn: (text) => {
      // Fetch with POST request
      return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }), // Correct body syntax
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Error posting chat');
        }
        return res.json(); // Parse JSON from response
      });
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ['userChats'] }); // Invalidate queries
      navigate(`/dashboard/chats/${id}`); // Navigate to the chat page with id
    },
    onError: (error) => {
      console.error('Error creating chat:', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text); // Trigger mutation
  };

  return (
    <div className="dashboardpage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>ALPHA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask Me Anything....." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboardpage;
