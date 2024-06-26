import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/ProjectQueries';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
export default function Project() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong </p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btm-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1 className="text-center">{data.project.name}</h1>
          <p className="text-center">{data.project.description}</p>
          <h5 className="text-center mt-3">Project Status</h5>
          <p className="text-center lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton projectId={id} />
        </div>
      )}
    </>
  );
}
