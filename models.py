from datetime import datetime
from extensions import db





class News(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(250), nullable= False)
    message=db.Column(db.Text, nullable=False)
    created_at=db.Column(db.DateTime(),server_default=db.func.now())
    


    def __repr__(self):
        return self.title

    def __init__(self, title):
        self.title = title
        # self.message = message
        
    def save(self):
        db.session.add(self)
        db.session.commit()




