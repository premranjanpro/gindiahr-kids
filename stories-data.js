window.KIDS_STORIES = "+json.dumps(stories, ensure_ascii=False, indent=2)+";
window.KIDS_CATEGORIES = "+json.dumps({k:{"name":v[0],"emoji":v[1],"description":v[2]} for k,v in cat_meta.items()}, ensure_ascii=False, indent=2)+";
