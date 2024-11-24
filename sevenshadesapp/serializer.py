from rest_framework import serializers 
from sevenshadesapp.models import MainCategory
from sevenshadesapp.models import SubCategory
from sevenshadesapp.models import Brand
from sevenshadesapp.models import Product
from sevenshadesapp.models import ProductDetail
from sevenshadesapp.models import Banners
from sevenshadesapp.models import AdminLogin
from sevenshadesapp.models import UsersAddress
from sevenshadesapp.models import Users




class MainCategorySerializer(serializers.ModelSerializer):
 
    class Meta:
        model = MainCategory
        fields = '__all__'
        
        
class SubCategorySerializer(serializers.ModelSerializer):
 
    class Meta:
        model = SubCategory
        fields = '__all__'     
        
class SubCategoryGetSerializer(serializers.ModelSerializer):   
    maincategoryid=MainCategorySerializer(many=False)     
    class Meta:
        model = SubCategory
        fields = '__all__'
           
class BrandSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Brand
        fields = '__all__'    
        
class ProductSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Product
        fields = '__all__'     
        
class ProductGetSerializer(serializers.ModelSerializer):   
    maincategoryid=MainCategorySerializer(many=False) 
    subcategoryid=SubCategorySerializer(many=False) 
    brandid=BrandSerializer(many=False)   
    class Meta:
        model = Product
        fields = '__all__'   
 
class ProductDetailSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = ProductDetail
        fields = '__all__'      
        
class ProductDetailGetSerializer(serializers.ModelSerializer):   
    maincategoryid=MainCategorySerializer(many=False) 
    subcategoryid=SubCategorySerializer(many=False) 
    brandid=BrandSerializer(many=False)   
    class Meta:
        model = ProductDetail
        fields = '__all__'                  
        
        
class BannersSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Banners
        fields = '__all__'               
        
class AdminLoginSerialize(serializers.ModelSerializer):
    class Meta:
        model = AdminLogin
        fields = '__all__'   
        
class UserSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Users
        fields = '__all__'   
        
class UserAddressSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = UsersAddress
        fields = '__all__'         
#UserAddressGeterializer        
class UserAddressGetSerializer(serializers.ModelSerializer):   
    mobileno=UserAddressSerializer(many=False) 
    class Meta:
        model = UsersAddress
        fields = '__all__'                              