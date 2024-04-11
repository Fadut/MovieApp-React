import '../App.css';

function TvCard({tv}){
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + tv.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{tv.original_name.substring(0,200)}</span></h5>
                    <span className="far fa-star" aria-hidden="true"></span>
                    <span className="ml-1">{tv.vote_average}</span>
                    <p className="card-text">{tv.overview.substring(0,125).concat('....')}</p>
                    <div className="d-flex justify-content-between p-0"> 
                        <span className="far fa-calendar" aria-hidden="true"> {tv.first_air_date} </span>

                      
                        
                    </div>            
                </div>
            </div>
        </div>
      );
}
      
export default TvCard;

    
