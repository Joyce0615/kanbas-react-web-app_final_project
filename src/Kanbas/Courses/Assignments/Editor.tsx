export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
            <input id="wd-name" className="form-control mb-3" value="A1 - ENV + HTML" />
            <textarea id="wd-description" className="form-control" rows={10}>
                The assignment is available online 
                Submit a link to the landing page of your Web application running on Netlify. The landing page should include 
                the following: Your full name and section Links to each of the lab assignments 
                Link to the Kanbas application Links to all relevant source code repositories 
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />

            <form>
                <div className="row mb-3">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
                    <div className="col-sm-10">
                        <input id="wd-points" className="form-control" value={100} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</label>  
                    <div className="col-sm-10">             
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </div>   
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</label>   
                    <div className="col-sm-10">    
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                            <option value="NUMBER">Number</option>
                        </select>  
                    </div>                
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</label>
                    <div className="col-sm-10">
                        <div className="form-control">
                            <select id="wd-submission-type" className="form-select mt-3 mb-3">
                                <option selected value="ONLINE">Online</option>
                                <option value="IN-PERSON">In Person</option>
                            </select>
                            <p>
                                <label className="fw-bold mb-2">Online Entry Options</label><br/>
                                
                                <input type="checkbox" name="online-entry" id="wd-text-entry" className="form-check-input"/>
                                <label htmlFor="wd-text-entry" className="form-check-label ms-2 mb-3">Text Entry</label><br />

                                <input type="checkbox" name="online-entry" id="wd-website-url" className="form-check-input"/>
                                <label htmlFor="wd-website-url" className="form-check-label ms-2 mb-3">Website URL</label><br />

                                <input type="checkbox" name="online-entry" id="wd-media-recordings" className="form-check-input"/>
                                <label htmlFor="wd-media-recordings" className="form-check-label ms-2 mb-3">Media Recordings</label><br />

                                <input type="checkbox" name="online-entry" id="wd-student-annotation" className="form-check-input"/>
                                <label htmlFor="wd-student-annotation" className="form-check-label ms-2 mb-3">Student Annotation</label><br />

                                <input type="checkbox" name="online-entry" id="wd-file-upload" className="form-check-input"/>
                                <label htmlFor="wd-file-upload" className="form-check-label ms-2 mb-3">File Uploads</label><br />
                            </p>
                        </div>
                    </div>                
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label text-end">Assign</label>
                    <div className="col-sm-10">
                        <div className="form-control">
                            <label htmlFor="wd-assign-to" className="fw-bold mt-2">Assign to</label>
                            <input id="wd-assign-to" className="form-control" placeholder="Everyone" />
                            <label htmlFor="wd-due-date" className="fw-bold mt-3">Due</label>
                            <input type="date" className="form-control" id="wd-due-date" />

                            <div className="d-flex mb-3">
                                <div className="flex-fill me-1">
                                    <label htmlFor="wd-available-from" className="col-form-label fw-bold mt-3">Available from</label>
                                    <input type="date" className="form-control" id="wd-available-from" />
                                </div>
                                <div className="flex-fill ms-1">
                                    
                                    <label htmlFor="wd-available-until" className="col-form-label fw-bold mt-3">Until</label>
                                    <input type="date" className="form-control" id="wd-available-until" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <hr/>

            <div id="wd-editor-controls" className="text-nowrap">
                <button id="wd-save-assignment-btn" className="btn btn-lg btn-danger float-end">
                    Save
                </button>
                <button id="wd-cancel-edit-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export {};