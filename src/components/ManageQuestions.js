import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllQuestions } from '../services/questionsService';
import QuestionsTable from "./QuestionsTable";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
const ManageQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTopic: topic } = location.state;
  const [questions, setQuestions] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const handleClickBack = () => navigate(-1);
  const handleClickCreate = () => navigate('create', { state: {selectedTopic: topic} });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    const getQuestions = async () => {
      setLoading(true)
      try {
        const data = await getAllQuestions(topic._id);
        data.map((element, i) => {
          return element.id = i +1;
        });
        
        setQuestions(data);
        setSearchResults(data);
        setLoading(false)
       
      } catch (error) {
        console.log(error.message);
      }
    }
    getQuestions();
    
  }, [])

  return (
    <main>
      <h4>available questions for {topic.name}</h4>
       <SearchBar data={questions} setSearchResults={setSearchResults}/>
       <QuestionsTable questions={currentItems} loading={loading}/>
       <div className="qst-nav-btn">
       <button onClick={handleClickBack}>Back</button>
        <Pagination itemsPerPage={itemsPerPage} totalItems={questions.length} paginate={paginate} />
       <button className="nav-create-btn" onClick={handleClickCreate}>Create new Question</button>
       </div>
    </main>
  );
};

export default ManageQuestions;
