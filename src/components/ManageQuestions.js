import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllQuestions } from '../services/questionsService';
import QuestionsTable from "./QuestionsTable";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
const ManageQuestions = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const handleClickBack = () => navigate(-1);
  const handleClickCreate = () => navigate();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    const getQuestions = async () => {
      setLoading(true)
      //console.log(topic)
      try {
        const data = await getAllQuestions(topic);
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
       <SearchBar data={questions} setSearchResults={setSearchResults}/>
       <QuestionsTable questions={currentItems} loading={loading} />
       <div className="qst-nav-btn">
       <button onClick={handleClickBack}>Back</button>
        <Pagination itemsPerPage={itemsPerPage} totalItems={questions.length} paginate={paginate} />
       <button className="nav-create-btn" onClick={handleClickCreate}>Create new Question</button>
       </div>
    </main>
  );
};

export default ManageQuestions;
