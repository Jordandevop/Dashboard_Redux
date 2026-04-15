import { useDispatch, useSelector } from "react-redux";
import { setFilter, setPriorityFilter, setSearch, setSort} from "../features/tasksSlice";

function TaskFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.task.filter);
  const priorityFilter = useSelector((state) => state.task.priorityFilter);
  const search = useSelector((state) => state.task.search);
  const sort = useSelector((state) => state.task.sort);

  return (
    <div className="d-flex gap-2 mb-3">
        <button
    className="btn btn-outline-secondary"
    onClick={() => {
        dispatch(setFilter("all"))
        dispatch(setPriorityFilter("all"))
        dispatch(setSearch(""))
       dispatch(setSort(false))
    }}
>
    Tous
</button>
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <select
        className="form-select"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value="all">Toutes</option>
        <option value="done">Terminées</option>
        <option value="inProgress">En cours</option>
      </select>
      <select
        className="form-select"
        value={priorityFilter}
        onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
      >
        <option value="all">Toutes priorités</option>
        <option value="low">Basse</option>
        <option value="medium">Moyenne</option>
        <option value="high">Haute</option>
      </select>
      <button
        className={`btn ${sort ? "btn-dark" : "btn-outline-dark"}`}
        onClick={() => dispatch(setSort(!sort))}
      >
        Priorité
      </button>
    </div>
  );
}

export default TaskFilter;
