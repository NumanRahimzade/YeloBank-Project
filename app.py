from os import name
from flask import Flask
from flask_admin import Admin   #adminpanel
from flask_admin.contrib.sqla import ModelView   #adminpanel


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123@127.0.0.1:3307/blog'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY']='my_project'

from controllers import *
from extensions import *
from models import *

admin = Admin(app)   #adminpanel
admin.add_view(ModelView(News, db.session))   #adminpanel

if __name__ == '__main__':
    app.init_app(db)
    app.init_app(migrate)
    app.run(debug=True)