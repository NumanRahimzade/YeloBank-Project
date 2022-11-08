import requests
import xmltodict
import json
from flask import render_template, request


from app import app

from models import *




@app.route('/', methods=['GET'])
def main(page=1):

    page = request.args.get('page', 1, type=int)
    posts = News.query.order_by(News.id.desc()).paginate(page=page, per_page=3)
    data = requests.get('https://www.cbar.az/currencies/05.01.2022.xml')
    xpars = xmltodict.parse(data.content)
    print(xpars)
    # xpars = xpars['ValCurs']['ValType'][1]['Valute'][0]['Value']
    
    
    print(type(xpars))
    return render_template('main_page.html', user=posts, money = xpars)


@app.route('/news', methods=['GET', 'POST'])
def news(page=1):

    page = request.args.get('page', 1, type=int)
    posts = News.query.order_by(News.id.desc()).paginate(page=page, per_page=6) # this line right here
    return render_template("news.html", user=posts)

    # newsFormain = News.query.all()
        
    # return render_template('news.html', user=newsFormain)



@app.route('/news/next')
def news_with_id(page=1):
    page = request.args.get('page', 1, type=int)
    posts = News.query.order_by(News.id.desc()).paginate(page=page, per_page=12) # this line right here
    return render_template("news.html", user=posts)
    




@app.route('/newsall/<int:post_id>')
def newsall(post_id):

    newsFormain = News.query.filter_by(id=post_id).first()
        
    return render_template('news_full.html', user=newsFormain)












        